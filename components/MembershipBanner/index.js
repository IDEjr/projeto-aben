import React from "react";
import style from "./MembershipBanner.module.css"; 
import { ButtonBase } from "../ButtonBase/index";
import Image from "next/image";
import nurseImg from "../../public/images/nurse.svg"

const MembershipBanner = () => {
    return(
        <div className={style.banner}>
            <div>
                <Image className={style.photo} src={nurseImg} />
            </div>
            <div className={style.info}>
                <h1 className={style.textHeader}>Seja um associado da ABEN-RS!</h1>
                <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada lectus eget 
                risus convallis pulvinar sed consequat scelerisque nibh. Quis etiam felis egestas sapien nec rhoncus, ut 
                pellentesque.</p>
                <ButtonBase style={{marginLeft:"0px"}}color="secondary" onClick={() => console.log("associe-se vc também :)")}>
                    Associe-se {'\u2794'}
                </ButtonBase>
            </div>
        </div>
    );
};

export default MembershipBanner;
