import { createContext, useReducer } from "react";
import questions from "../data";
import { normalizeQuestions, shuffleAnswers } from "../helper";

const initialState = {
    currentQuestionIndex: 0,
    questions: [],                                       //questions: [],       //questions,
    showResult: false,
    answers: [],         //answers: [],     //answers: shuffleAnswers(questions[0]),
    currentAnswer: '',
    correctAnswersCount: 0
};

const reducer = (state, action) => {
    //console.log('reducer', state, action);

    switch (action.type) {
         case 'LOADED_QUESTIONS': {
            const normalizedQuestions = normalizeQuestions(action.payload)
            return {
                ...state,
                questions:normalizedQuestions,
                answers: shuffleAnswers(normalizedQuestions[0]),
            }
        }
        case 'NEXT_QUESTION': {
        const showResult = state.currentQuestionIndex === state.questions.length -1;
        const currentQuestionIndex = showResult 
        ? state.currentQuestionIndex 
        : state.currentQuestionIndex + 1;
        const answers = showResult ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
        return {...state, currentQuestionIndex, showResult, answers, currentAnswer: ''};     

        }
        case 'RESTART': {
            return initialState
        }
        case 'SELECT_ANSWER': {
            const correctAnswersCount = 
            action.payload === state.questions[state.currentQuestionIndex].correctAnswer
            ? state.correctAnswersCount + 1 
            : state.correctAnswersCount;
            return {
                ...state, 
                currentAnswer: action.payload,
                correctAnswersCount
            }

        }
        default: {
            return state;
        }
    }
   
    // if (action.type === 'NEXT_QUESTION') {
    //     const showResult = state.currentQuestionIndex === state.questions.length -1;
    //     const currentQuestionIndex = showResult 
    //     ? state.currentQuestionIndex 
    //     : state.currentQuestionIndex + 1;
    //     const answers = showResult ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
    //     return {...state, currentQuestionIndex, showResult, answers};        
    // }
    // if (action.type === 'RESTART') {
    //     return initialState
    // }
    //return state
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState);
   // console.log("render", value)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};