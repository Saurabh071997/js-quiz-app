import axios from 'axios'
import App from './App'
import "regenerator-runtime/runtime.js"
import ('./favicon.png')

const getCategoryData = async() => { 
    try{
        let response = await axios.get("https://fandom-quiz.herokuapp.com/categories")
        console.log(response.data)
        return response.data.data
    }catch(err){
        console.error(err)
    }
}


document.getElementById('root')
.innerHTML = App();



const PlayQuiz = () =>{
    const fillCategoryBlock = async () =>{
        let categoryData = await getCategoryData();
        let categoryBlock = "";
    
        categoryData.map(category => {
            console.log("category obj : " , category)
            categoryBlock += `<div class="container-item" data-item-name=${category.name} data-item-id=${category._id}>
            <img src=${category.imgUrl} alt="img" class="container-img" />
            </div>`
        })
    
        document.querySelector('.container-block').innerHTML  = categoryBlock;
    
    }

    fillCategoryBlock()

}




const nav_img = document.querySelector('.nav-img')
const nav_title = document.querySelector('.nav-title')
nav_img.addEventListener('click', ()=>{console.log("img clicked")})
nav_title.addEventListener('click', ()=>{console.log("title clicked")})
PlayQuiz()