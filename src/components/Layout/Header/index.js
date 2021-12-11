import { Container } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Title from "./Title.js";

const Header = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <Title />
      <Navbar />
    </Container>
  );
};
export default Header;
