import presidentesABEN from "/public/images/presidentesABEn.svg";
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import PageTitle from "components/PageTitle";
import Image from "next/dist/client/image";

const Historia = () => {
  return (
    <>
      <PageTitle title="Historia" />
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            my: 4,
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={10}>
            <Box fullWidth borderRadius={1}>
              <Image src={presidentesABEN} />
              <Typography sx={{ fontSize: "0.8rem" }}>
                Presidentes ABEn-RS de 1952 - 2016
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              textAlign: "justify",
              lineHeight: 2.5,
              my: 2,
            }}
          >
            <Typography variant="p" paragraph sx={{ textIndent: "3ch" }}>
              Em 23 de setembro de 1950, reuniram-se no anfiteatro do Hospital
              de Pronto Socorro Municipal enfermeiras radicadas em Porto Alegre,
              com a finalidade de formar a Seção de Porto Alegre da Associação
              Brasileira de Enfermagem Diplomadas – ABED, posteriormente
              transformada em ABEn – Seção do Rio Grande do Sul. Foram suas
              sócias fundadoras: Olga Verderese, Irmã Suzana Boutin, Irmã
              Mariana Pereira Junho, Maria da Gloria Leite Rozas, Diva Câmera e
              Odette Vitória Rita Mascagni. No dia 30 do mesmo mês e ano, foi
              realizada a primeira Assembléia Geral da ABED – Seção do Rio
              Grande do Sul para eleição e posse da 1ª Diretoria, que ficou
              assim constituída: Presidente, Olga Verderese; Vice-Presidente,
              Irmã Mariana Pereira Junho; Secretária, Odette Vitória Rita
              Mascagni; Tesoureira, Maria da Gloria Leite Rozas.
            </Typography>
            <Typography variant="p" paragraph sx={{ textIndent: "3ch" }}>
              Em 1951 foi fundada a Escola de Enfermagem de Porto Alegre, da
              Universidade Federal do Rio Grande do Sul (UFRGS), em cuja sede
              passaram a ser realizadas as reuniões da Seção. Em 1960, a Seção
              foi reconhecida de utilidade pública. Nesse ano a Escola de
              Enfermagem da UFRGS cedeu uma sala para a instalação da secretaria
              da Seção. A sede própria foi adquirida em 1970, localizada na Av.
              Venâncio Aires, 1119, sala 01, 1º andar. CEP: 90.040.193. Bairro
              Bom Fim, Porto Alegre/RS. Posteriormente mudou-se para a Av.
              Venâncio Aires, 1191, sala 142, 14º andar. CEP: 90.040.193, Bairro
              Bom Fim em Porto Alegre/RS. Esta Seção hospedou o 9º, o 21º, o
              34º, o 46º, o 56° e 64º Congresso Brasileiro de Enfermagem – CBEn,
              realizados, respectivamente, em 1956, 1969, 1982, 1994, 2004 e
              2012.
            </Typography>
            <Typography variant="p" paragraph sx={{ textIndent: "3ch" }}>
              A partir do 64º CBEn a ABEn-RS, de 2013-2016, iniciou uma reflexão
              sobre os Cenários da ABEn que temos e a que queremos. Era urgente
              refletir sobre como promover o desenvolvimento científico,
              cultural, social e ético da Enfermagem para qualificar o cuidado
              profissional e a atenção ao usuário do SUS e do próprio
              profissional; como realizar o fortalecimento da integração entre
              as instituições da Enfermagem ; como melhorar a valorização e o
              marketing da enfermagem; enfim que estratégias podem ser
              utilizadas para congregar mais sócios para renovar e inovar a
              qualidade da formação, qualificação, práticas profissionais,
              estudos e pesquisas em enfermagem, uma vez que o contexto social,
              político, econômico e profissional está exigindo grandes mudanças
              em relação à políticas sociais públicas, estratégias e
              instrumentos científicos, tecnológicos e conhecimento científico
              inovador para atender com eficiência as demandas da população. Em
              2017-2019 estabeleceu-se um plano estratégico de reorganização da
              ABEn-RS e de inovação, retomando as suas finalidades, valores e
              empreendedorismo da enfermagem do RS.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Historia;
