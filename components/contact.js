import contactStyles from "../styles/contact.module.css";
import Social from "./social";

const Contact = ()=>{
    return(
        <div className={contactStyles.stack}>
            <h3 className={contactStyles.heading}>Contact</h3>
            <Social iconSize="22px"/>
            <address>react@web.mail.address</address>
        </div>
    )
}

export default Contact;