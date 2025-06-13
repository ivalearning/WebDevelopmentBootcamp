import express  from "express";

const app = express();                          // 

/*
app.listen(3000, () => {                        // 3000 cislo portu
    console.log("Listening on port 3000");      // callback funkce
})

*/

// lepsi je cislo portu vzdefinovat jako konstantu

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})


app.get('/', (req, res) => {
  res.send('Hello World')
})
