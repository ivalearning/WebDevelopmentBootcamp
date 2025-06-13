import express from "express";

const app = express();

app.get('/', (req, res) => {                // '/' = endpoint root, home page (req,res) - request, respons
  //res.send('Hello from World')
  res.send("<h1>Home page</h1><p> plus nejaky obsah</p>")
})

app.get('/contact', (req, res) => {              // endpoint contact   
  res.send("<h2>Contact page</h2><h3>You need to be signed in to get help</h3>")
})

app.get('/about', (req, res) => {               // endpoint about 
  res.send("<h2>About page </h2><p>a company founded in 2014, helps support one of the largest developer ecosystems in the world.</p>")
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})