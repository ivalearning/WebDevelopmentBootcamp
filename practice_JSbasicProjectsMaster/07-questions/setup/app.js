//using selectors inside the element
// traversing the dom


/* const buttons = document.querySelectorAll('.question-btn');

buttons.forEach(function(btn){
    btn.addEventListener('click', function(event) {
        //console.log(event.currentTarget.parentElement.parentElement);

        const question = event.currentTarget.parentElement.parentElement; // get grand parent
        console.log(question);
        question.classList.toggle('show-text');
    });
});
*/

const questions = document.querySelectorAll('.question');

questions.forEach( function(q) {

    const btn = q.querySelector('.question-btn');   // nepouzije se document.querySelector = nevybira vsechny, ale jen ten, na ktery se kliklo
    //console.log(btn);
    
    btn.addEventListener('click', function() {

        questions.forEach( function(allQuestions) {
            if (allQuestions!=q) {
                allQuestions.classList.remove('show-text');
            }
        })
        q.classList.toggle('show-text');
        //console.log(questions);
    });
});

