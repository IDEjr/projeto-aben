import { Button, Container, TextField, Typography, Grid } from "@mui/material";
import * as emailjs from 'emailjs-com';
/* import MapView from "components/MapView"; */
import PageTitle from "components/PageTitle";
import React, { useState } from "react";
import { Box } from "@mui/system";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [obs, setObs] = useState("");

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
  /* const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      userName: name,
      userEmail: email,
      userCompany: company,
      userPhone: number,
      userObs: obs,
    };
    console.log(userData);
  
  }; */

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_qj6d5mm', 'template_zu1x13y', event.target, 'user_hKbajQwH7EuguFyuPXHEc') // colocar aqui as credenciais emailjs do pessoal da aben
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setNumber('');
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

  return (
    <>
      <PageTitle title="Contato" />
      <Container sx={{ mt: 2 }}>
        <Box>
          <Typography >
            <b>Endereço:</b> Av. Venâncio Aires, 1191/142 - Bom Fim
          </Typography>
          <Typography>
            <b>CEP:</b> 90.040-193 - Porto Alegre
          </Typography>
          <Typography>
            <b>E-mail:</b> aben-rs@abennacional.org.br
          </Typography>
          <Typography>
            <b>Telefone:</b>(51) 3332-8622
          </Typography>
        </Box>
        {/* <Box display="flex" width="100%">
          <MapView />
        </Box> */}
        <Box justifyContent={"center"} marginBottom={'15px'}>
          <Typography>Entre em contato conosco:</Typography>
          <form onSubmit={sendEmail}>
            <Grid container
              sx={{
                my:2
              }}
              spacing={2}>
              <Grid item
                xs={12}
                md={6}>
                <TextField
                  fullWidth
                  name="name"
                  required
                  label="Nome"
                  defaultValue=""
                  onChange={nameHandler}
                />
              </Grid>
              <Grid item
                xs={12}
                md={6}>
                <TextField
                  fullWidth
                  name='company'
                  required
                  label="Empresa"
                  defaultValue=""
                  onChange={companyHandler}
                />
              </Grid>
              <Grid item
                xs={12}
                md={6}>
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
              <Grid item
                xs={12}
                md={6}>
                <TextField
                  fullWidth
                  name='email'
                  required
                  label="E-mail"
                  defaultValue=""
                  onChange={emailHandler}
                />
              </Grid>
              <Grid item
                xs={12}>
                <TextField
                  fullWidth
                  minRows="4"
                  name='message'
                  required
                  label="Observação"
                  defaultValue=""
                  multiline
                  onChange={obsHandler}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Button variant="contained" size='large' type="submit">Enviar</Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Contato;
