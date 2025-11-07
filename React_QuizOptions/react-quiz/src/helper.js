export const shuffleAnswers = (question) => {
    const answers = [
        question.correctAnswer, 
        ...question.incorrectAnswers
    ];

    return answers.map ((answer) => ({
        sort: Math.random(),
        value: answer,
    })).sort((a,b) => a.sort - b.sort).map(a => a.value)
};

export const normalizeQuestions = (backendQuestions) => {
  return backendQuestions.map((backendQuestion) => {
    const incorrectAnswers = backendQuestion.incorrect_answers.map(
      (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
    );
    return {
      correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
      question: decodeURIComponent(backendQuestion.question),
      incorrectAnswers,
    };
  });
};