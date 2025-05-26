//$(document).ready(function() {                  // kontroluje/pocka, ze jQuery library finished loading, totez jako kdyz script tagy dam na konec body
//    $("h1").css("color", "red");  })

//$("h1").css("color", "red");
// $() (nebo jQuery() je totez jako document.querySelector() nebo document.querySelectorAll()
// document.querySelector("h1").style.color = "red"
// 1 hodnota = getting the value, 2 hodnoty = setting the value
//console.log($("h1").css("font-size")); vs $("h1").css("font-size", "3rem")

$("h1").addClass("big-title margin-50"); // removeClass(), hasClass()

$("h1").text("Bye")
//$("button").text("Don't click me")
//$("button").html("<b>Hey</b>")

console.log($("a").attr("href"));
//$("a").attr("href", "https://www.centrum.cz")

/*$("h1").click(function() {

}) */

// bez jQuery
for (let i = 0; i < 5; i++) {
    const btn = document.querySelectorAll("button");
    btn[i].addEventListener('click', function() {
       document.querySelector("h1").style.color = "orange"
    });
}

// s jQuery
$("button").click( function() {
    $("h1").css("color", "purple")
});

// key pressed
$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);  
});

$(document).keypress(function(e){
    let key = e.key;
    $("h1").text(key)
});

$("h1").on("mouseover", function() {   // pouzitelne pro vsechny events
    $("h1").css("color", "red")
});


$("h1").before("<button> before</button>");
$("h1").after("<button> after</button>");
$("h1").prepend("<button> pred a uvnitr elementu h1</button>");
$("h1").append("<button> uvnitr a za elementem h1</button>");

$("img").remove();

/* $("button").on("click", function(){
    $("h1").toggle();    // hide() / fadeOut() (nahle/postupne), show() / fadeIn(), toggle()
});                      // fadeToggle()
*/

// slideUp(), slideDown(), slideToggle()
$("button").on("click", function(){
   $("h1").slideToggle(); 
   });

// animate
$("button").on("click", function(){
   $("h1").animate({opacity:0.5});             // { jen css code} a value by melo byt cislo
   });                                         // muze by i procento v "20%"

// rada akci
$("button").on("click", function(){
   $("h1").slideUp().slideDown().animate({opacity:0.5}) 
   });
 