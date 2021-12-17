import React from "react";

import Link from "next/link";
import { Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Link href="/Home">
        <Button
          sx={{
            minWidth: "14.28%",
          }}
        >
          Home
        </Button>
      </Link>
      <Link href="/Sobre">
        <Button
          sx={{
            minWidth: "14.28%",
          }}
        >
          Sobre
        </Button>
      </Link>
      <Link href="/Noticias">
        <Button
          sx={{
            minWidth: "14.28%",
          }}
        >
          Notícias
        </Button>
      </Link>
      <Link href="/Eventos">
        <Button
          sx={{
            minWidth: "14.28%",
          }}
        >
          Eventos
        </Button>
      </Link>
      <Link href="/Historia">
        <Button
          sx={{
            minWidth: "14.28%",
          }}
        >
          História
        </Button>
      </Link>
      <Link href="/Associese">
        <Button
          sx={{
            minWidth: "14.28%",
          }}
        >
          Associe-se
        </Button>
      </Link>
      <Link href="/Contato">
        <Button
          sx={{
            minWidth: "14.28%",
          }}
        >
          Contato
        </Button>
      </Link>
    </Box>
  );
};
export default Navbar;
