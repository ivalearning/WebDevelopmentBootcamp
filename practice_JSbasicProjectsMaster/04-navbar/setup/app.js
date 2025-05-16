// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class



const navToggle = document.querySelector('.nav-toggle');
const ulList = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    //console.log(ulList.classList);
    // console.log(ulList.classList.contains('show-links'));

    /* -- pomoci add a remove --
    if (ulList.classList.contains('show-links')) {
        ulList.classList.remove('show-links')
        
    } else {
        ulList.classList.add('show-links')
    }
        nebo oboji obstara jedna metoda         */
       ulList.classList.toggle("show-links");
})