import Image from 'next/image'
import logo from '../../../../public/images/logo-footer.png'
import facebook from '../../../../public/images/icons/facebook.svg'
import instagram from '../../../../public/images/icons/instagram.svg'
import phone from '../../../../public/images/icons/phone.svg'
import mail from '../../../../public/images/icons/mail.svg'
import { Avatar, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

const ContatosItem = ({
  text,
  src
}) => (
  <Box display="flex" flexDirection="row" alignItems="center">
    <Avatar sx={{
      height: "35px",
      width: "35px",
      backgroundColor: "#ffffff",
      mr: 2
    }}>
      <Image src={src} alt={text} width='18%' height='18%' />
    </Avatar>
    <Typography variant="footer">{text}</Typography>
  </Box>
)

export default function Footer() {
  return (
    <Box
      backgroundColor="dark.main">
      <Container
        sx={{
          py: 4,
          minHeight: "340px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Grid container>
          <Grid
            xs={6}
            md={4}
            display="flex"
            justifyContent="center"
            alignContent="center"
            item>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
            }}>
              <Image src={logo} alt="logo da aben" />
            </Box>
          </Grid>
          <Grid
            xs={6}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            item>
            <Grid container spacing={3}>
              <Grid
                xs={12}
                md={6}
                item>
                <ContatosItem src={instagram} text="abenrs_" />
              </Grid>
              <Grid
                xs={12}
                md={6}
                item>
                <ContatosItem src={mail} text="aben-rs@abennacional.org.br" />
              </Grid>
              <Grid
                xs={12}
                md={6}
                item>
                <ContatosItem src={phone} text="51 3232-3232" />
              </Grid>
              <Grid
                xs={12}
                md={6}
                item>
                <ContatosItem src={facebook} text="facebook/aben" />
              </Grid>
            </Grid>
            <Box
              mt={2}
              display="flex"
              flexDirection={{
                xs: "column",
                md: "row",
              }}
              justifyContent="space-between">
              <Typography sx={{
                mb: 0.8
              }} variant="footer">Porto Alegre - RS</Typography>
              <Typography sx={{
                mb: 0.8
              }} variant="footer">Av Venâncio Aires, 1191/142 - Bom Fim</Typography>
              <Typography sx={{
                mb: 0.8
              }} variant="footer" >CEP 90040-193</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}
