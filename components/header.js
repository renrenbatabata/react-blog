import Container from "./cotainer";
import Logo from "./logo";
import Nav from "./nav";
// import headerStyles from "../styles/header.module.css";
import utilsStyles from "../styles/utils.module.css";

const Header = () =>{
    return(
        <header>
            <Container large>
            <div className={utilsStyles.spaceBetween}>
            <Logo boxOn/>
            <Nav/>
            </div>
            </Container>
        </header>
    )
}

export default Header;