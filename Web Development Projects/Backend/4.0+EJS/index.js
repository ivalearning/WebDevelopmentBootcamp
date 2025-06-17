import express from "express";

const app = express();
const port = 3000;

let weekEndDay = false;

function isWeekEnd(dayNbr) {
    if (dayNbr===0 || dayNbr === 6) {
        weekEndDay = true;        
    } 
}


app.get("/", (req, res) => {

    const d = new Date();
    let dayNr = d.getDay();
    console.log(dayNr);
    let day = "a week day";
    let message = "it's time to work hard!" ;

    isWeekEnd(dayNr);
    console.log(weekEndDay);

    if (weekEndDay) { 
       day =  "the weekend";
       message = "it's time to have fun!" ; 
    } 
       
    res.render("index.ejs", {
        weekPart: day,
        msg: message
    })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



// const users = ['geddy', 'neil', 'alex'];
//ejs.render('<p>[?= users.join(" | "); ?]</p>', {users: users}, {delimiter: '?', openDelimiter: '[', closeDelimiter: ']'});
// => '<p>geddy | neil | alex</p>'





