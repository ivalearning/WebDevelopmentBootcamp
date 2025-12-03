import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "bookcollection",
  password: "IvaPostgres900",
  port: 3000,
});

db.connect();

const app = express();
const port = 5353;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let books = [];

books = getBooksOrderBy();

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

  const result = await db.query(`SELECT * FROM books ORDER BY ${orderBy}`);
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

    // validation?
    // if (isbn && !/^\d{10}(\d{3})?$/.test(isbn)) {
    //   //isbn 13 digits if added
    //   return res.status(400).send("Not correct format of ISBN")
    // }

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
    const created = `${createdDate.getDate()}-${
      createdDate.getMonth() + 1
    }-${createdDate.getFullYear()}`; //const created = new Date().toDateString();
    //console.log(created);

    db.query(
      "INSERT INTO books (isbn, title, author, description, created, createddate) VALUES ($1, $2, $3, $4, $5, $6)",
      [isbn, title, author, description, created, createdDate]
    );

    books = getBooksOrderBy();

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
    const book = books.find((p) => p.id == req.params.id);
    res.render("edit.ejs", { book });
    //console.log(req.params.id);
  } catch (error) {
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

  // if (isNaN(rating) || rating < 1 || rating > 10) {
  //     return res.status(400).send("Rating must be a number between 0 and 10.");
  // }

  try {
    await db.query("update books SET rating=$1, review=$2  where id = $3", [
      rating,
      review,
      id,
    ]);

    books = getBooksOrderBy();

    res.redirect("/");

    console.log(books);
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
    books = getBooksOrderBy();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting book.");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
