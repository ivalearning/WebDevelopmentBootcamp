import express from "express";
import bodyParser from "body-parser";
import axios from "axios";                // Promise based HTTP client for the browser and node.js

const app = express();
const port = 5353;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");    // any random activity
    const result = response.data;                                                   //?
    res.render("index.ejs", { returnedData: result });
  } catch (error) {
    console.error("Failed to make request.", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  try {
  //console.log(req.body);
  let selectedType = req.body.type;
  let selectedParticipants = req.body.participants;
  console.log(selectedType);
  console.log(selectedParticipants);

  let api = `https://bored-api.appbrewery.com/filter?type=${selectedType}&participants=${selectedParticipants}`;
  //let api = `https://bored-api.appbrewery.com/filter?type=education&participants=1`;
    console.log(api);
  
  const response = await axios.get(api);
  const result = response.data;
  //console.log(result);
  
  let randomIndex = Math.floor(Math.random() * result.length);
  console.log(randomIndex);
  
  
  res.render("index.ejs", { returnedData: result[randomIndex],});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    console.log(error);
    res.render("index.ejs", {
     error: "No such activity."

    });
    
    

  }

  // error handling




  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
