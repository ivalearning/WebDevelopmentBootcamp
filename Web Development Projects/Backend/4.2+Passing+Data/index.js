import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let name = req.body["fName"];
  let surname = req.body["lName"];
  const header = "Enter name and surname"
  res.render("index.ejs", 
    {
    title: header,
    fName: name,
    lName: surname,
    }
  )
  console.log("Hello");
});

app.post("/submit", (req, res) => {
  let name = req.body["fName"];
  let surname = req.body["lName"];
  let charNr = name.length + surname.length;
  let entered = name + " " + surname;
  let header = "Entered name " + entered + " has " + charNr + " characters."
  
  res.render("index.ejs", 
    {
      title: header,
      entered: entered,
    }
  )
    console.log("Hello back");
    console.log(charNr);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
