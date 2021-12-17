import React from "react";

import Link from "next/link";
import { Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Link href="/Home" passHref>
        <Button fullWidth>
          Home
        </Button>
      </Link>
      <Link href="/Sobre" passHref>
        <Button fullWidth>
          Sobre
        </Button>
      </Link>
      <Link href="/Noticias" passHref>
        <Button fullWidth>
          Notícias
        </Button>
      </Link>
      <Link href="/Eventos" passHref>
        <Button fullWidth>
          Eventos
        </Button>
      </Link>
      <Link href="/Publicacoes" passHref>
        <Button fullWidth>
          Publicações
        </Button>
      </Link>
      <Link href="/Associese" passHref>
        <Button fullWidth>
          Associe-se
        </Button>
      </Link>
      <Link href="/Contato" passHref>
        <Button fullWidth>
          Contato
        </Button>
      </Link>
    </Box>
  );
};
export default Navbar;
