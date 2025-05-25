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
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection);   
    
});    
})

function makeSelection(selection) {
    const computerSelection = randomSelection();

    const youAreWinner = isWinner(selection, computerSelection);
    const computerIsWinner = isWinner(computerSelection, selection);
    //console.log(selection);
    //console.log(computerSelection);

    addSelectionResult(computerSelection, computerIsWinner);
    addSelectionResult(selection, youAreWinner);

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

function isWinner(selection1, selection2) {
    return (selection1.beats === selection2.name)
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}