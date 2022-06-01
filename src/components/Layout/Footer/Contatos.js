import Image from "next/image";
import logo from "../../../../public/images/logo-footer.png";
import facebook from "../../../../public/images/icons/facebook.svg";
import instagram from "../../../../public/images/icons/instagram.svg";
import phone from "../../../../public/images/icons/phone.svg";
import mail from "../../../../public/images/icons/mail.svg";
import { Avatar, Container, Grid, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import logoIDE from "../../../../public/images/logoide.png";
import Contato from "pages/contato";

const ContatosItem = ({ text, src, header }) => (
  <Box display="flex" flexDirection="row" alignItems="center">
    <Avatar
      sx={{
        height: "35px",
        width: "35px",
        backgroundColor: "#ffffff",
        mr: header ? 0.5 : 2,
      }}
    >
      <Image src={src} alt={text} width="18%" height="18%" />
    </Avatar>
    <Typography variant="footer" color={header ? "text.primary" : "white"} sx={{ whiteSpace: "nowrap" }}>{text}</Typography>
  </Box >
);

const Contatos = ({
  header,
}) => {

  return (
    <Box width={header ? 300 : 1} ml={header ? 2 : 0}>
      <Grid container spacing={header ? 0 : 3} sx={{ my: header ? 0 : 1 }}>
        <Grid xs={12} md={6} item>
          <ContatosItem header={header} src={instagram} text="abenrs_" />
        </Grid>
        <Grid xs={12} md={6} item>
          <ContatosItem header={header} src={mail} text="aben-rs@abennacional.org.br" />
        </Grid>
        <Grid xs={12} md={6} item>
          <ContatosItem header={header} src={phone} text="51 3232-3232" />
        </Grid>
        <Grid xs={12} md={6} item>
          <ContatosItem header={header} src={facebook} text="facebook/aben" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contatos;
