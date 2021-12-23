import Partner from "./Partner";
import { ButtonBase } from "../ButtonBase";
import classes from "./Partners.module.css";
import { Container, Typography, Grid, Card } from "@mui/material";

function click() {
  console.log("clicked!");
}

export default function Partners() {
  return (
    <Container>
      <Card>
        
            <Grid container sx={{
              display:'flex',
              alignItems:'space-between',
              }}>
              <Grid container item spacing={1} xs={12} md={6} pl={2} pr={2} >
                <Grid item>
                  <Typography p={1}variant="h4">Parceiros</Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                    leo justo velit nulla ante dignissim diam adipiscing. Eu est
                    id quam mauris. In sed vulputate in justo.
                  </Typography>
                </Grid>
                <Grid item>
                  <ButtonBase
                    onClick={click}
                    style={{
                      margin: "0",
                      width: "146px",
                      height: "44px",
                    }}>
                    Leia mais
                  </ButtonBase>
                </Grid>
              </Grid>
              <Grid container item xs={12} md={6} spacing={1} p={2}>
                <Grid item >
                  <Partner
                    title="Cinema X"
                    imageUrl="https://picsum.photos/1920/800"
                  />
                </Grid>
                <Grid item>
                  <Partner
                    title="Café"
                    imageUrl="https://picsum.photos/1921/800"
                  />
                </Grid>
                <Grid item>
                  <Partner
                    title="Clube dos Enfermeiros"
                    imageUrl="https://picsum.photos/1922/800"
                  />
                </Grid>
                <Grid item>
                  <Partner
                    title="Parceiro"
                    imageUrl="https://picsum.photos/1923/800"
                  />
                </Grid>
                <Grid item>
                  <Partner
                    title="Farmácia Y"
                    imageUrl="https://picsum.photos/1924/800"
                  />
                </Grid>
                <Grid item>
                  <Partner
                    title="Outro Parceiro"
                    imageUrl="https://picsum.photos/1925/800"
                  />
                </Grid>
              </Grid>
            </Grid>
          
      </Card>
    </Container>
  );
}
