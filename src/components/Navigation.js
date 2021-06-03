import Nav_Logo from '../images/logo.png'
import './Navigation.css'

const Navigation = () =>{
    return `
        <div class="nav-header">
            <img src=${Nav_Logo} alt="nav-img" class="nav-img" />
            <div class="nav-title">fandomQUIZ</div>
        </div>
    `
}

export default Navigation 