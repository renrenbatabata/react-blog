import heroStyles from "../styles/hero.module.css";
import utilsStyles from "../styles/utils.module.css";
import Container from "./cotainer";
import Image from "next/image";
import cube from "../images/cube.jpg";

const Hero = ({ title, subtitle, imageOn = false }) => {
    return (
        <Container>
            <div className={utilsStyles.sideBySideCenter}>
                <div className={heroStyles.text}>
                    <h1 className={heroStyles.title}>{title}</h1>
                    <p className={heroStyles.subtitle}>{subtitle}</p>
                    {imageOn && <figure>[画像]</figure>}
                </div>
                {imageOn && (
                    <figure className={heroStyles.image}>
                        <Image
                        src={cube}
                        alt=""
                        layout="responsive"
                        sizes="(min-width : 1152px) 576px,(min-width : 768px) 50vw,100vw"
                        priority
                        placeholder="blur"
                        />
                    </figure>
                )}
            </div>
        </Container>
    )
}

export default Hero;