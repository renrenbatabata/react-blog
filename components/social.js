import socialStyles from "../styles/social.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faInstagram,
    faGithub,
}from "@fortawesome/free-brands-svg-icons"

const Social = ({iconSize = "initial"})=>{
    return(
        <ul className={socialStyles.list} style={{'--icon-size':iconSize}}>
            <li>
                <a href="https://x.com/">
                <FontAwesomeIcon icon={faXTwitter} />
                <span className={socialStyles.srOnly}>X</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
                <span className={socialStyles.srOnly}>Instagram</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/">
                <FontAwesomeIcon icon={faGithub} />
                <span className={socialStyles.srOnly}>Github</span>
                </a>
            </li>
        </ul>
    )
}

export default Social;