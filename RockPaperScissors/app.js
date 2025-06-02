const selectionBtns = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const yourScore = document.querySelector('[data-your-score]');
const compScore = document.querySelector('[data-comp-score]');
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '👊',
        beats: 'scissors',
    },
        {
        name: 'paper',
        emoji: '✋',
        beats: 'rock',
    },
        {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper',
    },
];

selectionBtns.forEach( function (btn) {
btn.addEventListener('click', function(e) {
    //console.log(btn.dataset.selection);

    const selectionName = btn.dataset.selection;
    const option = SELECTIONS.find(option => option.name === selectionName)
    makeSelection(option);   
});    
})

function makeSelection(selected) {
    const computerSelection = randomSelection();

    const youAreWinner = isWinner(selected, computerSelection);
    const computerIsWinner = isWinner(computerSelection, selected);
    //console.log(selected);
    //console.log(computerSelected);

    addSelectionResult(computerSelection, computerIsWinner);
    addSelectionResult(selected, youAreWinner);

    if (computerIsWinner) incrementScore(compScore);
    if (youAreWinner)  incrementScore(yourScore);  
}

function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1;
}

function addSelectionResult(selection, winner) {
    
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) { div.classList.add('winner') }
finalColumn.after(div);
}

function isWinner(beats, selection2) {
    return (beats.beats === selection2.name)
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}