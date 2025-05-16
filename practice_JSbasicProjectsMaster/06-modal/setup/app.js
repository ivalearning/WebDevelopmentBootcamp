// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const modalButton = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-container');

modalButton.addEventListener('click', function() {

    modalOverlay.classList.add('open-modal');
    modal.classList.add('modal-bigger');
    //    console.log(modalOverlay.classList);
});

closeButton.addEventListener('click', function() {
    modalOverlay.classList.remove('open-modal');
    modal.classList.remove('modal-bigger');
    //console.log(modalOverlay.classList);

});