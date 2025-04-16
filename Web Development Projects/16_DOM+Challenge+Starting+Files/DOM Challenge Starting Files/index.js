
document.firstElementChild.lastElementChild.querySelector('ul').lastElementChild.innerHTML = "Changed";

document.getElementsByTagName("li")[2].style.color = "red";

document.getElementsByClassName("btn")[0].style.color = "red";

document.getElementById("heading").innerHTML = "Good bye";

document.querySelector("h1");
<h1 id=​"heading">​Hello​</h1>​
document.querySelector("#heading");
<h1 id=​"heading">​Hello​</h1>​
document.querySelector(".btn");
<button class=​"btn" style=​":​active color:​red;​">​Click Me​</button>​

document.querySelector("li a");
<a href=​"https:​/​/​www.google.com">​Google​</a>​

document.querySelector("li.list"); // stejnz element=bez mezery
<li class=​"list">​…​</li>​

document.querySelector("#list a");   // s mezerou, pokud je child nebo grandchild
<a href=​"https:​/​/​www.google.com">​Google​</a>​


document.querySelector("#list .list");
<li class=​"list">​…​</li>​

document.querySelectorAll("#list .list");
NodeList(3) [li.list, li.list, li.list]

document.querySelectorAll("#list .list")[2].style.color = "blue";
'blue'

document.querySelector("#list a").style.color = "red";
'red'

document.querySelector(".btn").style.backgroundColor = "yellow";
'yellow'

document.querySelector("h1").classList.add("huge");


document.querySelector("h1").innerHTML;  //veskery obsah mezi h1 tagy
'<strong>Hello</strong>'
document.querySelector("h1").textContent; // jen text
'Hello'

document.querySelector("h1").innerHTML = "<em>Good Bye </em>";
'<em>Good Bye </em>'

document.querySelector("a");
<a href=​"https:​/​/​www.w3schools.com/​jsref/​dom_obj_style.asp">​w3school​</a>​


document.querySelector("a").attributes;
NamedNodeMap {0: href, href: href, length: 1}

document.querySelector("a").getAttribute("href");
'https://www.w3schools.com/jsref/dom_obj_style.asp'

document.querySelector("a").setAttribute("href", "https://www.youtube.com/watch?v=2ml4x0rO1PQ");






