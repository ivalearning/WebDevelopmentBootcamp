
const fs = require("fs");

fs.writeFile("msg.txt", "Text inserted to a new file", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


fs.readFile('./msg.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

