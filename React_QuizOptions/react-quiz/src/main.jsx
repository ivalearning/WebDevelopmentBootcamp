import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Quiz from './components/Quiz.jsx'
import { QuizProvider } from './contexts/quiz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizProvider>
       <Quiz />
    </QuizProvider>  
  </StrictMode>,
)
