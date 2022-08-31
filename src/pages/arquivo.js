import { Box, Container, Typography, IconButton, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PageTitle from 'components/PageTitle';
import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { handleJSONfile, handleJSONfiles } from '../../utils/postHandler';
import DownloadIcon from '@mui/icons-material/Download';
import { useRouter } from "next/router";

export function getStaticProps() {
  const contato = handleJSONfile(`./public/pages/contato.json`);
  const arquivos = handleJSONfiles("./public/files");

  return {
    props: { arquivos, contato },
  };
}

const Arquivo = ({
  arquivos
}) => {
  const router = useRouter();
  const [pageSize, setPageSize] = useState(25);

  const downloadFile = useCallback(
    filePath => router.push(`/${filePath}`), [router]);

  const columns = useMemo(() => ([
    {
      field: "title",
      headerName: "Título",
      width: 250,
    },
    {
      field: "content",
      headerName: "Descrição",
      width: 250,
    },
    {
      field: "fileName",
      headerName: "Data",
      width: 250,
      filterable: false,
      valueFormatter: ({ value }) => value.split("_")[0].split("-").reverse().join("/")
    },
    {
      type: "actions",
      flex: 1,
      field: "",
      headerName: "",
      filterable: false,
      renderCell: ({ row: { file } }) => (
        <Box sx={{
          width: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end"
        }}>
          <Button
            component="a"
            href={`/${file}`}
            download>
            <DownloadIcon />
          </Button>
        </Box>
      )
    }
  ]), []);

  return (
    <>
      <PageTitle title="Arquivo" />
      <Container sx={{ my: 6 }}>
        <Typography>Nosso repositório de arquivos. Encontra o que buscas abaixo e clica em baixar.</Typography>
        <DataGrid
          autoHeight
          sx={{ my: 2 }}
          disableSelectionOnClick
          rows={arquivos}
          columns={columns}
          getRowId={r => r.fileName}
          pageSize={pageSize}
          onPageSizeChange={s => setPageSize(s)}
        />
      </Container>
    </>
  );
}

export default Arquivo;
