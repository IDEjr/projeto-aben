import logoAben from "/public/images/logoAben.jpg";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Title = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
      <Box width="90px" mr={2}>
        <Image src={logoAben} alt="ABEN LOGO" />
      </Box>
      <Typography variant="h3" >
        Associação Brasileira de Enfermagem - ABEn-RS
      </Typography>
    </Box>
  );
};

export default Title;
