const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', function() {
    //console.log(sidebar.classList);
    sidebar.classList.toggle('show-sidebar')

})

closeButton.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')

})
