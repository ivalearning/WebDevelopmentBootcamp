import { QuizContext } from "../contexts/quiz";
import Question from "./Question";
import { useContext, useEffect } from "react";


const Quiz = () => {

    const [quizState, dispatch] = useContext(QuizContext);
  // console.log("state", quizState);
       
    const apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986"

    useEffect(() => {
        if (quizState.questions.length >0) {
            return;
        }
        console.log("on initialize");
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log("data", data);
            dispatch({type: 'LOADED_QUESTIONS', payload: data.results});
        }  );
    }, []);

    return (
        <div className="quiz">
            {
                quizState.showResult &&  (
                    <div className="results">
                        <div className="congratulations">Congratulation</div>
                        <div className="results-info">
                            <div>You have completed the quiz.</div>
                            <div>You've got {quizState.correctAnswersCount} out of {quizState.questions.length} correct.</div>
                        </div>
                        <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                    </div>
                )
            }

        {!quizState.showResult && (         
            <div>
                <div className="score">Question {quizState.currentQuestionIndex +1}/{quizState.questions.length}</div>
                <Question />
                <div className="next-button" onClick={() => dispatch({type:"NEXT_QUESTION"})}>Next question </div>
            </div>
            )
        }
        </div> 
    )
}

export default Quiz;