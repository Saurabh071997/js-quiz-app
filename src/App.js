// import _ from "lodash";
import './App.css'
import JSLogo from './js_img.gif'

const App = () =>{

    return `<div class="container"> 
    <img src=${JSLogo} alt="img" class="bg-img"/>
        <div class="hero">Vanilla JS Starter Pack</div>
        <div class="main">
            Edit <span>src/App.js</span> and reload to create modern JS web apps
        </div>
        <div class="link">
        <a href="https://github.com/Saurabh071997/create-vanilla-js-app/tree/dev" class="link-url">Learn more</a>
        </div>
    </div>`
}

export default App;