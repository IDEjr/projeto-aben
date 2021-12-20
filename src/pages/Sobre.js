import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import PageTitle from "components/PageTitle";

const Sobre = () => {
  const linkEstatuto = "https://aben-rs.org.br/wp-content/uploads/2015/06/Estatuto-ABEn-FINAL.pdf"
  
  
  return (
    <>
      <PageTitle title="Sobre" />
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            my: 4,
          }}
        >
          <Grid
            item
            sx={{
              my: 2,
            }}
          >
            <Typography sx={{ my: 2 }} variant="h3">
              Visão
            </Typography>
            <Typography variant="p">
              Ser uma instituição representativa das categorias e de Estudantes
              da Enfermagem e sustentável, dinâmica, preditiva e empreendedora.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              my: 2,
            }}
          >
            <Typography sx={{ my: 2 }} variant="h3">
              Missão
            </Typography>
            <Typography sx={{ lineHeight: "2rem" }} variant="p">
              Ser promotora da defesa, do protagonismo e da consolidação da
              Enfermagem como ciência, educação, gestão, pesquisa e cuidado à
              saúde, focada nos valores e princípios essenciais da profissão.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              my: 2,
            }}
          >
            <Typography sx={{ my: 2 }} variant="h3">
              Princípios e Valores
            </Typography>
            <Typography sx={{ lineHeight: "2rem" }} variant="p">
              <li>
                Básicos - Atuar ancorada: em seus princípios e valores: ética,
                integridade, justiça, respeito às pessoas, ao meio ambiente e
                cidadania.
              </li>
              <li>
                Essenciais - Comprometimento com os profissionais, estudantes e
                usuários; Valorização das pessoas e da cultura.
              </li>
              <li>
                Operacionais - Visibilidade, empatia, comunicação, transparência
                nos processos, qualidade, valorização, protagonismo, inovação,
                empreendedorismo e sustentabilidade.
              </li>
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              my: 2,
            }}
          >
            <Typography sx={{ my: 2 }} variant="h3">
              Estatuto
            </Typography>
            <Typography sx={{ lineHeight: "2rem" }} variant="p">
              Fundada em 1926, sob a denominação de Associação Nacional de
              Enfermeiras Diplomadas (ANED), a Associação Brasileira de
              Enfermagem teve o seu primeiro Estatuto Social aprovado em 07 de
              agosto de 1944, registrado sob o nº de Ordem 4.482 do livro K,
              Cartório do 6º Ofício do Rio de Janeiro. À época, passou a
              denominar-se Associação Brasileira de Enfermeiras Diplomadas
              (ABED). A denominação de Associação Brasileira de Enfermagem
              (ABEn) foi recebida quando da aprovação da primeira reformulação
              do Estatuto, em 21 de agosto de 1954. A atual reformulação (2018)
              é a décima primeira, no transcurso dos seus 91 anos. Para mais
              informações, consulte nosso
              <Link
                target="_blank"
                underline="none"
                href={linkEstatuto}
              > Estatuto </Link>
              completo.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Sobre;
