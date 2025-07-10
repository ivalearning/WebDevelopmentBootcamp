import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 5353;

const db = new pg.Client({
  user: "postgres",
  hostname: "localhost",
  database: "permalist",
  password: "12345",
  port: 3000,
  });

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];
items = getItems();

async function getItems() {
  await db.query("select * from items", (err,res) => {
  if (err) {
    console.error("Error executing query", err.stack);  
  } else {
    items = res.rows;
  }
  console.log(items);
  return items;
});
}

app.get("/", (req, res) => {
  try {
    
    res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  }); }
  catch (err) {
    console.log(err);    
  }
});

app.post("/add", (req, res) => {

  try {
  const item = req.body.newItem;
  //console.log(item);

  db.query("INSERT INTO items (title) VALUES ($1)",  [ item ]);

  items = getItems();
  //  items.push({ title: item });
  res.redirect("/");
  } catch (err) {
    console.log(err);    
  }
}); 

app.post("/edit", (req, res) => {
  try {
  const task = req.body.updatedItemTitle;
  const updId = req.body.updatedItemId;
  //console.log(task);
  //console.log(updId);

  db.query("update items set title = $1 where id = $2",  [ task, updId ]);

   items = getItems();
   res.redirect("/");  
  } catch (err) {
    console.log(err);    
  }
});

app.post("/delete", (req, res) => {
  try {
  const id = req.body.deleteItemId;
  console.log(id);

  db.query("DELETE FROM items WHERE id = $1", [ id ]);
  items = getItems();
  res.redirect("/");
  } catch (err) {
    console.log(err);    
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
