import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Card,
} from "@mui/material";
import PageTitle from "components/PageTitle";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import * as emailjs from "emailjs-com";
import BasicModal from "components/Modal";

const Associese = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = useState(false);
  const checkedOn = () => setChecked(true);
  const checkedOff = () => setChecked(false);

  const ModalHandler = () => {
    handleClose();
    location.reload(true);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_qj6d5mm",
        "template_63vxa9q",
        event.target,
        "user_hKbajQwH7EuguFyuPXHEc"
      ) // colocar aqui as credenciais emailjs do pessoal da aben
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleOpen();
  };

  return (
    <>
      <PageTitle title="Associe-se" />
      <Container>
        <Box my={6}>
          <Typography my={1} variant="h3">
            Novos Sócios
          </Typography>
          <Typography my={1} variant="p">
            Preencha a Ficha de Cadastro, assine e envie para ABEn-RS pelo
            e-mail aben-rs@abennacional.org.br.
          </Typography>
        </Box>
        <Box my={6}>
          <Typography my={1} variant="h3">
            Já sou sócio
          </Typography>
          <Typography my={1} variant="p">
            Realize o depósito bancário na conta da ABEn-RS e envie o
            comprovante do depósito para o e-mail aben-rs@abennacional.org.br.
            Nós faremos o envio por e-mail do seu recibo e declaração de
            associado quite com anuidade.
          </Typography>
        </Box>
        <Card sx={{ p: 3, my: 6 }}>
          <Box>
            <Typography variant="h3">Ficha de Cadastro</Typography>
          </Box>
          {open && <BasicModal opened={open} onConfirm={ModalHandler} />}
          <Box>
            <form onSubmit={sendEmail}>
              <Grid
                container
                sx={{
                  my: 2,
                }}
                spacing={2}
              >
                <Grid item xs={12} md={12} width={1}>
                  <TextField
                    fullWidth
                    name="name"
                    required
                    label="Nome"
                    defaultValue=""
                    //ref={nameInputRef}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputMask mask="99/99/9999">
                    {() => (
                      <TextField
                        fullWidth
                        name="birth"
                        required
                        label="Data de Nascimento"
                        defaultValue=""
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    name="civilState"
                    required
                    label="Estado Civil"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={4}> 
                  <TextField
                    fullWidth
                    name="sex"
                    required
                    label="Sexo"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="localBirth"
                    required
                    label="Local de Nascimento"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="nationality"
                    required
                    label="Nacionalidade"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <InputMask mask="9999999999">
                    {() => (
                      <TextField
                        fullWidth
                        name="rg"
                        required
                        label="RG"
                        defaultValue=""
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    name="orgaoEmissor"
                    required
                    label="Órgão Emissor"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    name="uf"
                    required
                    label="UF"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <InputMask mask="999.999.999-99">
                    {() => (
                      <TextField
                        fullWidth
                        name="cpfCnpj"
                        required
                        label="CPF/CNPJ"
                        defaultValue=""
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="addr"
                    required
                    label="Endereço"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <TextField
                    fullWidth
                    name="addrNum"
                    required
                    label="Nº"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    name="addrCompl"
                    required
                    label="Complemento"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    name="district"
                    required
                    label="Bairro"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    name="cep"
                    required
                    label="CEP"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    name="city"
                    required
                    label="Cidade"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    name="uf"
                    required
                    label="UF"
                    defaultValue=""
                  />
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <InputMask mask="(99) 99999-9999">
                    {() => (
                      <TextField
                        fullWidth
                        name="housePhone"
                        required
                        label="Telefone Residencial"
                        defaultValue=""
                        //ref={numberInputRef}
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputMask mask="(99) 99999-9999">
                    {() => (
                      <TextField
                        fullWidth
                        name="commercialPhone"
                        required
                        label="Telefone Comercial"
                        defaultValue=""
                        //ref={numberInputRef}
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputMask mask="(99) 99999-9999">
                    {() => (
                      <TextField
                        fullWidth
                        name="personalPhone"
                        required
                        label="Celular"
                        defaultValue=""
                        //ref={numberInputRef}
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="email"
                    required
                    label="E-mail"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="workspace"
                    required
                    label="Local de Trabalho"
                    defaultValue=""
                  />
                </Grid>
              </Grid>
              <Box flexDirection="row">
                <Box my={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={checked == true ? checkedOff : checkedOn}
                      />
                    }
                    label="Concordo em tornar-me sócio da ABEn-RS"
                  />
                </Box>
                <Box
                  my={2}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Button
                    disabled={!checked}
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    Enviar
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Card>
        <Box my={10}>
          <Typography variant="h3">Valores</Typography>
          <Grid container my={3}>
            <Grid
              container
              item
              pl={2}
              pr={2}
              xs={12}
              md={6}
              my={1}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid item my={1}>
                <Typography variant="h5">Associado Efetivo</Typography>
              </Grid>

              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography variant="p">Enfermeiro</Typography>
                <Typography>R$ 241,00</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography variant="p">
                  Técnico e Auxiliar de Enfermagem
                </Typography>
                <Typography>R$ 79,00</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography variant="p">Estudante de Pós Graduação </Typography>
                <Typography>R$ 120,00</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography variant="p">Estudante de Graduação</Typography>
                <Typography>R$ 70,00</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography variant="p">
                  Estudante Técnico de Enfermagem
                </Typography>
                <Typography>R$ 43,00</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              pl={2}
              pr={2}
              xs={12}
              md={6}
              my={1}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid item my={1}>
                <Typography variant="h5">Associado Estrangeiro</Typography>
              </Grid>

              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography variant="p">Enfermeiro</Typography>
                <Typography>R$ 293,00</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography variant="p">Estudante</Typography>
                <Typography>R$ 146,00</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography variant="p">Escolas e Associações</Typography>
                <Typography>R$ 366,00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Associese;
