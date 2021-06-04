import './QuizResult.css'

const QuizResult = (score, userAnswerlist) => {
    window.scrollTo(0, 0)

    let questionlist = "";

    userAnswerlist.map(item=>{
        let answerlist = "";

        item.options.map(option => {
            let bgColor = "#38BDF8";

            if(option.isCorrect){
                bgColor = "#F59E0B";
            }

            if(option.isCorrect && option._id === item.userAnswer){
                bgColor = "#22C55E"
            }else if(!option.isCorrect && option._id === item.userAnswer){
                bgColor = "#EF4444"
            }


            answerlist += `
                <div class="choice-div" style="background-color:${bgColor}">${option.value}</div>
            `
        })

        questionlist += `
            <div class="question-sub-container">
                <div class="question-div">${item.question}</div>
                <div class="choices">
                    ${answerlist}
                </div>
            </div>
        `
    })

    return `
        <div class="page-container">
            <div class="page-title">Score Board</div>
            <div class="score-txt">
                <span class="score-main">${score}</span> 
                <span class="score-total">/ ${userAnswerlist.length * 5}</span>
            </div>

            <div id="btn-play" >
                <button id="play-again" class="page-nav">Play Again</button>
            </div>

            <div class="page-txt">Performance Analysis</div>
            
            <div class="question-list">
                ${questionlist}
            </div>

        </div>
    `

}

export default QuizResult