import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 5353;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "1234",
  port: 3000,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;
let users = [];
/*
let users = [
  { id: 1, name: "Irena", color: "teal" },
  { id: 2, name: "Erik", color: "purple" },
];
*/

async function showVisited() {
  let countries = [];
  
  const selected = await db.query("select country_code from visited_countries where user_id=$1", [currentUserId]);
    //console.log(selected);
    //console.log(selected.rows[0].country_code);
    
  selected.rows.forEach((recordRow) => {
  countries.push(recordRow.country_code);
  });
  console.log(countries);

  return countries;
}

async function getcurrentUser(){
    const allUsers = await db.query("select * from users");
    users = allUsers.rows;
    return users.find((user) => user.id == currentUserId);
}

// GET home page
app.get("/", async (req, res) => {
  const countries = await showVisited();  
  const total = countries.length;
  const currentUser = await getcurrentUser();

  res.render("index.ejs", { 
    countries : countries, 
    total : total, 
    users: users,
    color: currentUser.color })
  //console.log(total);  
});


//INSERT new country
app.post("/add", async (req, res) => { 
  
   const addedCountry = req.body["country"];
   console.log(addedCountry);
   const currentUser = await getcurrentUser();
  
   let newCode = [];
   try {
   newCode = await db.query(
    "SELECT country_code FROM countries where lower(country_name) like '%' || $1 || '%'", 
    [addedCountry.toLowerCase()] );
    
   const codeToAdd = newCode.rows[0].country_code;
   console.log(codeToAdd);
   
   try {
    await db.query("INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)", 
      [ codeToAdd, currentUserId ]);
    res.redirect("/");
    } catch (err) {
      console.log(err);

      const countries = await showVisited();
      const total = countries.length;
      
      res.render("index.ejs", {  
        countries : countries, 
        total : total, 
        users: users,
        color: currentUser.color,
        error: "Country already added.", 
      });
    }
  } catch (err) {
      console.log(err);

      const countries = await showVisited();
      const total = countries.length;
      
      res.render("index.ejs", {  
        countries : countries, 
        total : total, 
        users: users,
        color: currentUser.color,
        error: "Country does not exist.", 
      }); 
    }   
 //db.end();
});

app.post("/user", async (req, res) => {
  if (req.body.add == "new") {
    res.render("new.ejs")
  } else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html

  const name = req.body.name;
  const color = req.body.color;

  const newRecord =  await db.query("INSERT INTO users (name, color) VALUES ($1, $2) RETURNING id;", [name, color], );

  const id = newRecord.rows[0].id;
  currentUserId = id;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
