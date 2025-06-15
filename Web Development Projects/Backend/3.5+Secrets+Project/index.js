//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

let pswdCorrect = false;

function checkText(req, res, next) {
  console.log(req.body["password"]);

  let userInput = req.body["password"];
  const correctPswd = "dedek"

  if (userInput===correctPswd) {
    pswdCorrect = true
        }
    next();
  } 
 
app.use(checkText);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (pswdCorrect) {
        res.sendFile(__dirname + "/public/secret.html");
        pswdCorrect = false;
    } else {
        res.sendFile(__dirname + "/public/index.html");              // udela totez res.redirect("/")   
    }
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

