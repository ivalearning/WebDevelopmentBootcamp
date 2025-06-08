/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs"


  const q = [
    {
        type: 'input',
        message: 'Enter an URL',
        name: 'url', 
    }
  ];

  inquirer.prompt(q).then( (answer) => {
    console.log(answer);

    const url = answer.url
      fs.writeFile('url.txt', url, (err) => {
      if (err) throw err;
      console.log('URL has been saved!');
    });   

    var qr_svg = qr.image(url, { type: 'png' }); // { type: 'png' } nemusi se specifikovat, protoze png je default
    qr_svg.pipe(fs.createWriteStream('qr_url.png'));
 
    var svg_string = qr.imageSync(url, { type: 'png' });

  })

  //URL musi byt cela https://google.com


  
  

