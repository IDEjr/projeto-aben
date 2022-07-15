import { Button, Container, TextField, Typography, Grid } from "@mui/material";
import * as emailjs from "emailjs-com";

import PageTitle from "components/PageTitle";
import React, { useState } from "react";
import { Box } from "@mui/system";
import MapView from "components/MapView";
import BasicModal from "components/Modal";
import { Card } from "@mui/material";
import { handleJSONfile } from "../../utils/postHandler";

export function getStaticProps(context) {
  const contato = handleJSONfile(`./public/pages/contato.json`);

  return {
    props: { contato },
  };
}

const Contato = ({
  contato = {}
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [obs, setObs] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const companyHandler = (event) => {
    setCompany(event.target.value);
  };
  const obsHandler = (event) => {
    setObs(event.target.value);
  };

  const sendEmail = (event) => {

    setIsDisabled(true);

    event.preventDefault();

    emailjs
      .sendForm(
        "service_y2jlui9",
        "template_85vt8na",
        event.target,
        "-A33T00xwYoA4qz18"
      ) // colocar aqui as credenciais emailjs do pessoal da aben
      .then(
        (result) => {
          handleOpen();
          console.log(result.text);
          setIsDisabled(false);
        },
        (error) => {
          setIsDisabled(false);
          console.log(error.text);
        }
      );
    setNumber("");
    event.target.reset();
  };

  const formatPhoneNumber = (event) => {
    const phoneNumber = event.target.value.toString();
    const clean = phoneNumber.replace(/\D/g, "");

    if (phoneNumber.length === 1 || phoneNumber.length === 2) {
      setNumber(clean.replace(/^(\d+)/g, "($1"));
    }
    if (phoneNumber.length > 2 && phoneNumber.length < 7) {
      setNumber(clean.replace(/^(\d\d)(\d{4})(\d+)$/g, "($1) $2-$3"));
    }
    if (phoneNumber.length >= 7 && phoneNumber.length <= 10) {
      setNumber(clean.replace(/^(\d\d)(\d{4})(\d+)$/g, "($1) $2-$3"));
    }
    if (phoneNumber.length >= 11 && phoneNumber.length <= 15) {
      setNumber(clean.replace(/^(\d\d)(\d{5})(\d{4})$/g, "($1) $2-$3"));
    }
  };

  const ModalHandler = () => {
    handleClose();
  };
  return (
    <>
      <PageTitle title="Contato" />
      <Container>
        <Grid
          container
          display="flex"
          flexDirection="column"
          alignContent="center"
          spacing={2}
          sx={{
            my: 4,
          }}
        >
          <Grid item>
            <Typography fontSize="1.5rem">
              <b>Endereço:</b> {contato.end}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize="1.5rem">
              <b>CEP:</b> {contato.cep}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize="1.5rem">
              <b>E-mail:</b> {contato.email}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize="1.5rem">
              <b>Telefone:</b> {contato.tel}
            </Typography>
          </Grid>
        </Grid>

        {open && <BasicModal opened={open} onConfirm={ModalHandler} />}
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ my: 6 }}
        >
          <Grid item xs={12} md={8}>
            <Box fullWidth backgroundColor="primary.main" borderRadius={1}>
              <MapView />
            </Box>
          </Grid>
        </Grid>
        <Card
          sx={{
            p: 3,
            mb: 8,
          }}
        >
          <Box justifyContent={"center"} marginBottom={"15px"}>
            <Typography fontSize="1.5rem">Entre em contato conosco:</Typography>
            <form onSubmit={sendEmail}>
              <Grid
                container
                sx={{
                  my: 2,
                }}
                spacing={2}
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="name"
                    required
                    label="Nome"
                    defaultValue=""
                    onChange={nameHandler}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="company"
                    required
                    label="Empresa"
                    defaultValue=""
                    onChange={companyHandler}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="phoneNumber"
                    value={number}
                    required
                    label="Telefone"
                    defaultValue=""
                    onChange={formatPhoneNumber}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="email"
                    required
                    label="E-mail"
                    defaultValue=""
                    onChange={emailHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    minRows="4"
                    name="message"
                    required
                    label="Observação"
                    defaultValue=""
                    multiline
                    onChange={obsHandler}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Button
                  disabled={isDisabled}
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Enviar
                </Button>
              </Box>
            </form>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Contato;
