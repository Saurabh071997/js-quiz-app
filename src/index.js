import axios from 'axios'
import "regenerator-runtime/runtime.js"
import ('./favicon.png')
import App from './App'
import QuizPage from './components/QuizPage'


const getCategoryData = async() => { 
    try{
        let response = await axios.get("https://fandom-quiz.herokuapp.com/categories")
        return response.data.data
    }catch(err){
        console.error(err)
    }
}

const getQuizData = async(categoryId ) =>{
    try{
        let response = await axios.get(`https://fandom-quiz.herokuapp.com/quiz/${categoryId}`)
        return response.data.data
    }catch(err){
        console.error(err)
    }
}


document.getElementById('root')
.innerHTML = App();



const PlayQuiz = () =>{

    const getQuestions = async (categoryId)=>{
        let questionResponse = await getQuizData(categoryId)
        return questionResponse?.questionset
    }


    const showQuestions = (questionset , category_item) =>{
        const TOTAL_QUESTIONS = 5
        let userAnswerList = [];
        let currentQuestionNo = 0
        console.log(questionset)
        document.querySelector('#route').innerHTML = QuizPage(category_item.dataset.itemName)
        document.querySelector("#exit").addEventListener('click', ()=>{window.location.reload()}) 
        document.querySelector('#finish').addEventListener('click', ()=>{
            console.log("Quiz Finished")
            console.log(userAnswerList)
        })
        
        const renderQuestion = ()=>{
            document.querySelector('.quiz-question').innerHTML = questionset[currentQuestionNo].question 
            document.querySelector('.quiz-question-counter').innerHTML = `Question : ${currentQuestionNo+1} / ${TOTAL_QUESTIONS}`
            let optionList = "";
            questionset[currentQuestionNo].options.map(optionItem => {
                optionList += `<div class="quiz-option" data-optionId=${optionItem._id}>${optionItem.value}</div>`
            })
    
            document.querySelector('.quiz-option-list').innerHTML = optionList

            document.querySelectorAll('.quiz-option').forEach(optionItem=>{
                optionItem.addEventListener('click', ()=>{
                    console.log(optionItem)
                    userAnswerList.push({...questionset[currentQuestionNo] , userAnswer: optionItem.dataset.optionid, userAnswerValue:optionItem.innerHTML})
                    renderNextQuestion()
                })
            })
        }

        const renderNextQuestion = ()=>{
            let nextQuestion = currentQuestionNo+1;
            if(nextQuestion >= TOTAL_QUESTIONS){
                renderFinalQuestion()
            }else{
                currentQuestionNo = nextQuestion
                renderQuestion();
            }
        }

        const renderFinalQuestion = () =>{
            document.querySelectorAll('.quiz-option').forEach(optionItem=>{
                optionItem.classList.add('disabled')
            })
            document.getElementById('finish').classList.remove('hide');
        }

        renderQuestion();
    

    }
    
    const fillCategoryBlock = async () =>{
        let categoryData = await getCategoryData();
       
        let categoryBlock = "";
    
        categoryData.map(category => {
            categoryBlock += `<div class="container-item" data-item-name=${category.name.split(" ").join("_")} data-item-id=${category._id}>
            <img src=${category.imgUrl} alt="img" class="container-img" />
            </div>`
        })
    
        document.querySelector('.container-block').innerHTML  = categoryBlock;
        

        let category_div_arr = document.querySelectorAll('.container-item')
        console.log(category_div_arr)

        category_div_arr.forEach(category_item =>{
            category_item.addEventListener('click', async ()=>{
                console.log(category_item.dataset.itemId," -  ", category_item.dataset.itemName)
                let questionset = await getQuestions(category_item.dataset.itemId)

                showQuestions(questionset, category_item)
            })
        } )
    
    }

    fillCategoryBlock()
}




const nav_img = document.querySelector('.nav-img')
const nav_title = document.querySelector('.nav-title')
nav_img.addEventListener('click', ()=>{window.location.reload()})
nav_title.addEventListener('click', ()=>{window.location.reload()})
PlayQuiz()