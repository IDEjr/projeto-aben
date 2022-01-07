import React from "react";
import style from "./MembershipBanner.module.css";
import { ButtonBase } from "../ButtonBase/index";
import Image from "next/image";
import nurseImg from "../../../public/images/nurse.svg";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const MembershipBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      backgroundColor: "primary.main",
    }}>
      <Container sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between'
      }}>
        {
          !isMobile &&
          <Image className={style.photo} src={nurseImg} alt="imagem de enfermeira" />
        }
        <div className={style.info}>
          <h1 className={style.textHeader}>Seja um associado da ABEN-RS!</h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            lectus eget risus convallis pulvinar sed consequat scelerisque nibh.
            Quis etiam felis egestas sapien nec rhoncus, ut pellentesque.
          </p>
          <ButtonBase
            style={{ marginLeft: "0px" }}
            color="secondary"
            onClick={() => console.log("associe-se vc também :)")}
          >
            Associe-se {"\u2794"}
          </ButtonBase>
        </div>
      </Container>
    </Box>
  );
};

export default MembershipBanner;
