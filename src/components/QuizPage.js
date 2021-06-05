import './QuizPage.css'

const QuizPage = (quizName) =>{
    window.scrollTo(0, 0)
    return `
        <div class="quiz-container">
            <div class="quiz-title">${quizName.split("_").join(" ") + " Quiz"}</div>
            <div class="quiz-question-counter">Question : 1 / 10</div>
            <div class="quiz-question-container">
                <div class="quiz-question">Question will be displayed here</div>
                <div class = "quiz-option-list">
                    <div class="quiz-option">Choice 1</div>
                    <div class="quiz-option">Choice 2</div>
                    <div class="quiz-option">Choice 3</div>
                    <div class="quiz-option">Choice 4</div>
                </div>
            </div>

            <div class="btn-quiz">
                <button id="finish" class="btn btn-finish hide" >Finish</button>
                <button id="exit" class="btn btn-reset">EXIT</button>
            </div>

        </div>
    `

}

export default QuizPage