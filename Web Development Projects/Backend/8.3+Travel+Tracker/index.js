import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 5353;

const db = new pg.Client ({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "12345",
  port:  3000
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



async function showVisited() {
  let countries = [];
  
  const selected = await db.query("select country_code from visited_countries");
    //console.log(selected);
    //console.log(selected.rows[0].country_code);
    
  selected.rows.forEach((recordRow) => {
  countries.push(recordRow.country_code);
  });
  console.log(countries);

  return countries;
}


// GET home page
app.get("/", async (req, res) => {
  const countries = await showVisited();  
  const total = countries.length;

  res.render("index.ejs", { countries : countries, total : total })

  //console.log(total);  
});

//INSERT new country
app.post("/add", async (req, res) => { 
  
   const addedCountry = req.body["country"];
   console.log(addedCountry);
  
   let newCode = [];
   try {
   newCode = await db.query(
    "SELECT country_code FROM countries where lower(country_name) like '%' || $1 || '%'", 
    [addedCountry.toLowerCase()] );
    
   const codeToAdd = newCode.rows[0].country_code;
   console.log(codeToAdd);
   
   try {
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", 
      [ codeToAdd ]);
    res.redirect("/");
    } catch (err) {
      console.log(err);

      const countries = await showVisited();
      const total = countries.length;
      
      res.render("index.ejs", {  
        countries : countries, 
        total : total, 
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
        error: "Country does not exist.", 
      }); 
    }   
 //db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
