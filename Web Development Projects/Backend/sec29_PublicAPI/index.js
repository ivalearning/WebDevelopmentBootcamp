import express from "express";
import bodyParser from "body-parser";
import axios from "axios";                // Promise based HTTP client for the browser and node.js


const app = express();
const port = 5353;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://randomuser.me/api/");    
    const result = response.data.results[0];    
    //console.log(result);
    
    res.render("index.ejs", {returnedData: result  });
  } catch (error) {
    console.error("Failed to make request.", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});


/*
<button onclick="copyWhenCliked()" onmouseout="outFunc()" id="copy" class="btn">Copy text</button>
<script>
    const copyBtn = document.getElementById("copy");
    copyBtn.addEventListener("click", () => { console.log("clicked");   });

    function copyWhenCliked() {
      const copyText = "copied text";
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
    }

    function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
    }
  </script>
  */