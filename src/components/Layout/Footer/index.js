import Image from "next/image";
import logo from "../../../../public/images/logo-footer.png";
import facebook from "../../../../public/images/icons/facebook.svg";
import instagram from "../../../../public/images/icons/instagram.svg";
import phone from "../../../../public/images/icons/phone.svg";
import mail from "../../../../public/images/icons/mail.svg";
import { Avatar, Container, Grid, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import logoIDE from "../../../../public/images/logoide.png";
import Contatos from "./Contatos";

export default function Footer({ contato }) {
  const linkIDE = "https://www.idejr.com.br/";
  return (
    <Box backgroundColor="dark.main">
      <Container
        sx={{
          py: 4,
          minHeight: "280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignContent="center"
            item
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "150px",
              }}
            >
              <Image src={logo} alt="logo da aben" />
            </Box>
          </Grid>
          <Grid
            xs={6}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            item
          >
            <Contatos {...{ contato }} />
            <Box
              mt={2}
              display="flex"
              flexDirection={{
                xs: "column",
                md: "row",
              }}
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  mb: 0.8,
                }}
                variant="footer"
              >
                Porto Alegre - RS
              </Typography>
              <Typography
                sx={{
                  mb: 0.8,
                }}
                variant="footer"
              >
                Av Venâncio Aires, 1191/142 - Bom Fim
              </Typography>
              <Typography
                sx={{
                  mb: 0.8,
                }}
                variant="footer"
              >
                CEP 90040-193
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </Container>
      <Box my={2} display="flex" flexDirection="row" justifyContent="center">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Link target="_blank" underline="none" href={linkIDE} sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mr: 1
          }}>
            <Image width={"45px"} height={"20px"} src={logoIDE} alt="logo da IDEjr" />
          </Link>
          <Typography variant="footer">
            - Site desenvolvido pela IDEjr - UFRGS
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
