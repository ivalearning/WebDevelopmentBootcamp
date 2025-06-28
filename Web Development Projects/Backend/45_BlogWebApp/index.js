import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override"

const app = express();
const port = 3000;

app.set('view engine', 'ejs');                        // view engine, the template engine to use = staticke ejs templaty, At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
app.use(express.static('public'));                    // built-in middleware function in Express, express.static(root, [options]), The root argument specifies the root directory from which to serve static assets.
app.use(bodyParser.urlencoded({ extended: true }));   // A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
app.use(methodOverride('_method'));                   // function to override the req.method property with a new value, default: ['POST']

let posts = [];
let idCounter = 1;
console.log(posts.length);

// Home - List all posts
app.get('/', (req, res) => {
  const postsDesc = posts.reverse();
  res.render('index.ejs', { postsDesc }); 
});

// New post form
app.get('/posts/new', (req, res) => {
  res.render('new.ejs');
});

// Create post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  //const date = new Date().toLocaleDateString('en-GB').padStart(10, '0');
  //const time = new Date().getHours();
  //const datetime = date + " " + time;
  const created = new Date().toString();
  posts.reverse();
  posts.push({ id: idCounter++, title, content, created });
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

  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect('/');
  console.log(post.id);
  console.log(req.params.id);   
  console.log(posts); 
});

// Delete post
app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.redirect('/');
  console.log(posts);
});

/*
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);

console.log(result);  // Expected output: Array ["exuberant", "destruction", "present"]

function isPositive(value) {
    return value > 0;
}

let filtered = [112, 52, 0, -1, 944].filter(isPositive);
console.log(filtered);
*/

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

console.log(posts);


