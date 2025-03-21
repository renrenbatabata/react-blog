import Container from "./cotainer";
import Logo from "./logo";
import Social from "./social";
import footerStyles from "../styles/footer.module.css"
import utilsStyles from "../styles/utils.module.css"

const Footer = () =>{
    return(
        <footer className={footerStyles.wrapper}>
            <Container>
            <div className={`${utilsStyles.sideBySideCenter} ${footerStyles.flexContainer}`}>
            <Logo/>
            <Social/>
            </div>
            </Container>
        </footer>
    )
}

export default Footer;