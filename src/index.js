import App from './App'
import ('./favicon.png')

document.getElementById('root')
.innerHTML = App();

const nav_img = document.querySelector('.nav-img')
const nav_title = document.querySelector('.nav-title')

nav_img.addEventListener('click', ()=>{console.log("img clicked")})
nav_title.addEventListener('click', ()=>{console.log("title clicked")})