import express from "express";
import axios from "axios";

const app = express();
const port = 5353;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "iva900";
const yourPassword = "iva900";
const yourAPIKey = "afb3b541-40d7-4d6d-92e5-74b703a75cbf";
const yourBearerToken = "0fdf1cb0-d049-427e-9109-52b852e94cad";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  const apiResponse = await axios.get("https://secrets-api.appbrewery.com/random");
  const jsonData = JSON.stringify(apiResponse.data);
  console.log(jsonData);
  
  res.render("index.ejs", {content: jsonData})
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  const apiResponseAll = await axios.get("https://secrets-api.appbrewery.com/all?page=2",
    {auth: {
    username: yourUsername,
    password: yourPassword
    },
  });
  const jsonData = JSON.stringify(apiResponseAll.data);
  res.render("index.ejs", {content: jsonData})
});

  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */


app.get("/apiKey", async (req, res) => {

  const apiResponseFilter = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`);
  const jsonData = JSON.stringify(apiResponseFilter.data);

  res.render("index.ejs", {content: jsonData})
});  

  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.


app.get("/bearerToken", async (req, res) => {

  const apiResponseId = await axios.get("https://secrets-api.appbrewery.com/secrets/42",
    {
      headers: {
        Authorization: `Bearer ` + yourBearerToken,       // totez vyjadreno jako headers: { Authorization: `Bearer ${yourBearerToken}` },
      }
    });
    const jsonData = JSON.stringify(apiResponseId.data)
    res.render("index.ejs", {content: jsonData});
});

  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
