import logoAben from "/public/images/logoAben.jpg";
import Image from "next/image";
import styles from "./Title.module.css";
const Title = () =>{

    return(
        <div className={styles.title}>
            <div className={styles.img}>
                <Image src={logoAben}/>
            </div>
            <div>
                <h1>Associação Brasileira de Enfermagem - ABEn-RS</h1>
            </div>
        </div>
    );
}
export default Title;