import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override"
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  hostname: "localhost",
  database: "blog",
  password: "IvaPostgres900",
  port: 3000,
  });

db.connect();

const app = express();
const port = 5353;

app.set('view engine', 'ejs');                        
app.use(express.static('public'));                    
app.use(bodyParser.urlencoded({ extended: true }));   
app.use(methodOverride('_method'));                   

let posts = [];
let idCounter = 1;

posts = getPosts();

async function getPosts() {
  const selectQuery = "select * from posts order by createddate desc";
  await db.query(selectQuery, (err,res) => {
  if (err) {
    console.error("Error executing query", err.stack);  
  } else {
    posts = res.rows;
  }
  console.log(posts);
  return posts;
});
}
console.log(posts);


// Home - List all posts
app.get('/', (req, res) => {
  try {
     res.render('index.ejs', { posts });   
  }
  catch (err) {
    console.log(err);
  }
});


// New post form
app.get('/posts/new', (req, res) => {
  res.render('new.ejs');
});

// Create post
app.post('/posts', (req, res) => {
  
  try {
  const title = req.body.title;
  const content = req.body.content;
  const created = new Date().toString();   
  const createdDate = new Date();
  
  db.query("INSERT INTO posts (title, content, created, createddate) VALUES ($1, $2, $3, $4)",  [title, content, created, createdDate ]);

  posts = getPosts();
  
  res.redirect("/");
  console.log(posts);
} catch (err) {
  console.log(err);    
  } 
});

// Edit post form
app.get('/posts/:id/edit', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render('edit.ejs', { post });
  console.log(req.params.id);
});

// Update post                                
app.put('/posts/:id', (req, res) => {

  const post = posts.find(p => p.id == req.params.id);
  const updated = new Date();
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  const created = new Date().toString();
  const createdDate = new Date();

  db.query("update posts SET title=$1, content=$2, created=$3, createddate=$4 where id = $5",  [ title, content, created, createdDate, id ]);
 
  posts = getPosts();

  res.redirect('/');
  //console.log(post.id);
  //console.log(req.params.id);   
  console.log(posts); 
});

// Delete post
app.delete('/posts/:id', (req, res) => {

  try {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM posts WHERE id = $1", [ id ]);
  posts = getPosts();
  res.redirect("/");
  } catch (err) {
    console.log(err);    
  }

  console.log(posts);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



// Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Mauris metus. 
// Ut tempus purus at lorem. 
// Vivamus ac leo pretium faucibus. Phasellus rhoncus.
