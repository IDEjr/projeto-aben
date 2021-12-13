import logoAben from "/public/images/logoAben.jpg";
import Image from "next/image";
import styles from "./Title.module.css";
import { Box, Typography } from "@mui/material";
const Title = () => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'

    }}>
      <div className={styles.img}>
        <Image src={logoAben} />
      </div>
      <Typography
      fontSize={'2.5rem'}
      >
          Associação Brasileira de Enfermagem - ABEn-RS</Typography>
    </Box>
  );
};
export default Title;
