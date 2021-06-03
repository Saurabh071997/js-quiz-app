// import _ from "lodash";
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () =>{
    return `<div>${Navigation()}
    <div id="route">${Home()}</div>
    ${Footer()}
    </div>`
}


export default App;