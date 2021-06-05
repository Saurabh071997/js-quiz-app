import './Footer.css'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/mail.svg'
import twitter from '../images/twitter.svg'

const Footer = () =>{
    return `<footer>
        <div class="footer">
            <div class="footer-txt">fandomQUIZ</div>
            <div class="footer-link-bar">
            <a
            href="https://twitter.com/im_saurabhK"
            class="footer-social-link"
          >
            <img
              class="footer-social-link-img"
              src=${twitter}
              alt="twitter"
            />
          </a>
  
          <a
            href="https://www.linkedin.com/in/saurabh-kamboj/"
            class="footer-social-link"
          >
            <img
              class="footer-social-link-img"
              src=${linkedin}
              alt="linkedin"
            />
          </a>
  
          <a
            href="https://github.com/Saurabh071997"
            class="footer-social-link"
          >
            <img
              class="footer-social-link-img"
              src=${github}
              alt="github"
            />
          </a>
  
          <a
            href="mailto:saurabhkamboj1997@gmail.com"
            class="footer-social-link"
          >
            <img
              class="footer-social-link-img"
              src=${mail}
              alt="mail"
            />
          </a>
            </div>
        </div>
    </footer>`
}

export default Footer