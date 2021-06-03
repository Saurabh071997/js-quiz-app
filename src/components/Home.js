import './Home.css'
import Banner from '../images/img_bg.png'

const Home = ()=>{
    return `<div class="main">
        <img src=${Banner} alt="banner" class="img-main" />
        <div class="container">
            <div class="container-txt">Choose and Play</div>
        </div>
    </div>`
}

export default Home