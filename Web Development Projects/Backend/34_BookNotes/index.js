import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
import methodOverride from "method-override";

const app = express();
const port = 5353;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

dotenv.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

let books = [];

books = await getBooksOrderBy();

async function getBooksOrderBy(sortOption = "date") {
  let orderBy = "createddate DESC";

  switch (sortOption) {
    case "title":
      orderBy = "title ASC";
      break;
    case "rating":
      orderBy = "rating DESC NULLS LAST";
      break;
    case "date":
    default:
      orderBy = "createddate DESC";
      break;
  }

  const query = `SELECT * FROM books ORDER BY ${orderBy}`;
  const result = await db.query(query);
  return result.rows;
}

//Home - List all books
app.get("/", async (req, res) => {
  try {
    const sortOption = req.query.sortOption || req.query.sort || "date";
    const books = await getBooksOrderBy(sortOption);
    res.render("index.ejs", { books, sortOption });
  } catch (error) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// New book form
app.get("/books/new", (req, res) => {
  res.render("new.ejs");
});

// Create new entry
app.post("/books", (req, res) => {
  try {
    const isbn = req.body.isbn;
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    if (!title || title.trim() === "") {
      return res.status(400).send("Title is required.");
    }

    if (!author || author.trim() === "") {
      return res.status(400).send("Author is required.");
    }

    if (description && description.length > 300) {
      return res.status(400).send("Descripion is too long.");
    }

    const createdDate = new Date();
    const created = `${createdDate.getDate()}-${createdDate.getMonth() + 1}-${createdDate.getFullYear()}`;

    db.query(
      "INSERT INTO books (isbn, title, author, description, created, createddate) VALUES ($1, $2, $3, $4, $5, $6)",
      [isbn, title, author, description, created, createdDate]
    );
   
    res.redirect("/");
    console.log(books);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting book.");
  }
});

// Add review form
app.get("/books/:id/edit", async (req, res) => {
  try {
    console.log(req.params.id);

    const book = books.find((p) => p.id == req.params.id);
    res.render("edit.ejs", { book });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading book.");
  }
});

// Add rating and my notes
app.put("/books/:id", async (req, res) => {
  const book = books.find((p) => p.id == req.params.id);
  const id = req.params.id;
  const rating = req.body.rating;
  const review = req.body.review;

  try {
    await db.query("update books SET rating=$1, review=$2  where id = $3", [
      rating,
      review,
      id,
    ]);

    books = await getBooksOrderBy();
    res.redirect("/");

  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating book.");
  }
});

// Delete post
app.delete("/books/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await db.query("DELETE FROM books WHERE id = $1", [id]);
    books = await getBooksOrderBy();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting book.");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
