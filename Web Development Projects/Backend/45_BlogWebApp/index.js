import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override"

const app = express();
const port = 5353;

app.set('view engine', 'ejs');                        
app.use(express.static('public'));                    
app.use(bodyParser.urlencoded({ extended: true }));   
app.use(methodOverride('_method'));                   

let posts = [];
let idCounter = 1;

// Home - List all posts
app.get('/', (req, res) => {
  const postsDesc = posts.sort((a,b) => a.createdDate - b.createdDate).reverse()
  res.render('index.ejs', { postsDesc }); 
});

// New post form
app.get('/posts/new', (req, res) => {
  res.render('new.ejs');
});

// Create post
app.post('/posts', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const created = new Date().toString();   
  const createdDate = new Date();
                                                      
  posts.push({ id: idCounter++, title, content, created, createdDate });

  res.redirect('/');
  console.log(posts);
});

// Edit post form
app.get('/posts/:id/edit', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render('edit.ejs', { post });
});

// Update post                                
app.put('/posts/:id', (req, res) => {

const post = posts.find(p => p.id == req.params.id);
const updated = new Date();
const created = new Date().toString();

  post.title = req.body.title;
  post.content = req.body.content;
  post.createdDate = updated;
  post.created = created;
  res.redirect('/');
  //console.log(post.id);
  //console.log(req.params.id);   
  console.log(posts); 
});

// Delete post
app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.redirect('/');
  console.log(posts);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



// Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Mauris metus. 
// Ut tempus purus at lorem. 
// Vivamus ac leo pretium faucibus. Phasellus rhoncus.
