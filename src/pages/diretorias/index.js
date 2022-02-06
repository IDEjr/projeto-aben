import { Container } from "@mui/material";
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
        {!!sortedDiretorias.length && (
          <DiretoriasGridView diretoria={sortedDiretorias[0]} />
        )}
      </Container>
      {/* <DiretoriasArchiveSwiper archive={sortedDiretorias.slice(1, sortedDiretorias.length) || []} /> */}
    </>
  );
};

export default Diretorias;
