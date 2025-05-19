// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggleButton = document.querySelector('.nav-toggle');
const menuContainer = document.querySelector('.links-container');
const linksList = document.querySelector('.links')

navToggleButton.addEventListener('click', function() {
    //menuContainer.classList.toggle('show-links');

    const containerHeight = menuContainer.getBoundingClientRect().height;
    const linksHeight = linksList.getBoundingClientRect().height;

    //console.log(containerHeight);
    //console.log(linksHeight);

    if (containerHeight === 0) {
       menuContainer.style.height = `${linksHeight}px`
    } else {
        menuContainer.style.height = 0;
    }  
})

// ********** fixed navbar ************

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
    //console.log(window.pageYOffset);

    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');        
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    } 
})

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach( function(link){
    link.addEventListener('click', function(e) {
        //prevent default behaviour, protoze se nezastavi presne, kde to chceme
        e.preventDefault();

        //navigate to a specific spot

        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id);
        
        const selectedLink = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = menuContainer.getBoundingClientRect().height;
        const fixedNavbar = navbar.classList.contains('fixed-nav');
        
        let position = selectedLink.offsetTop - navHeight;
        console.log(position);

        if (!fixedNavbar) {
            position = position - navHeight;            
        }
        if (navHeight>82) {
            position = position + containerHeight;           
        }

        window.scrollTo({
            left:0,
            top:position,
        });
        // zavirani menu po vybrani linku (vadi to hlavne pro male obrazovky)
        menuContainer.style.height = 0;
    });

});











