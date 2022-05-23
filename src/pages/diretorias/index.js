import { Container, Grid } from "@mui/material";
import {
  DiretoriasArchiveSwiper,
  DiretoriasGridView,
} from "components/Diretorias";
import PageTitle from "components/PageTitle";
import React, { useMemo } from "react";
import { handleJSONfiles } from "../../../utils/postHandler";

export function getStaticProps() {
  const diretorias = handleJSONfiles("./public/posts/diretorias");

  return {
    props: { diretorias },
  };
}

const Diretorias = ({ diretorias = [] }) => {
  const sortedDiretorias = useMemo(
    () =>
      diretorias.sort(function (a, b) {
        return new Date(b.data) - new Date(a.data);
      }),
    [diretorias]
  );

  return (
    <>
      <PageTitle title="Diretorias" />
      <Container
        sx={{
          my: 6,
        }}
      >
        <Grid container rowSpacing={6}>
          {!!sortedDiretorias.length && (
            sortedDiretorias.map(e =>
              <Grid key={e.fileName} item xs={12}>
                <DiretoriasGridView diretoria={e} />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Diretorias;
