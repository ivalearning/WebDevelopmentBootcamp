const buttons = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function(e) {
    //console.log(e.target.dataset.id);

    const id = e.target.dataset.id;

    if (id) {
        buttons.forEach( function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })   

         //remove active class from all
        tabContent.forEach( function(art) {
        art.classList.remove('active');
        })
        const tab = document.getElementById(id);

        tab.classList.add('active');        
    }
    
})


buttons.forEach( function(btn) {
    btn.addEventListener('click', function(e) {
       //console.log(e.currentTarget.dataset.id);

       const buttonId = e.currentTarget.dataset.id;
       


        
    })

})
