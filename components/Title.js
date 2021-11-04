import logoAben from "../public/images/logoAben.jpg";
import Image from "next/image"
import style from "./styles/Title.module.css";
const Title = () =>{

    return(
        <div className={style.title}>
            <div className={style.img}>
                <Image src={logoAben}/>
            </div>
            <div>
                <h1>Associação Brasileira de Enfermagem - ABEn-RS</h1>
            </div>
        </div>
    );
}
export default Title;