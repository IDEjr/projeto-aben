import React from "react";
import style from "./MembershipBanner.module.css"; 
import Button, { ButtonBase } from "../ButtonBase/index";
import Image from "next/image";
import nurseImg from "../../public/images/nurse.svg"

const MembershipBanner = () => {
    return(
        <div className={style.banner}>
            <div className={style.info}>
                <h1 className={style.textHeader}>Seja um associado da ABEN-RS!</h1>
                <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada lectus eget 
                risus convallis pulvinar sed consequat scelerisque nibh. Quis etiam felis egestas sapien nec rhoncus, ut 
                pellentesque.</p>
                <div>
                    <ButtonBase color="secondary" children="Associe-se \u2794" />
                </div>
            </div>
            <div className={style.photo}>
                <Image src={nurseImg} />
            </div>

        </div>
    );
};

export default MembershipBanner;