import { Container } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Title from "./Title.js";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box backgroundColor="#ffffff">
      <Container disableGutters>
        {
          isMobile ?
            <MobileNavBar />
            :
            <Box pt={2} px={3}>
              <Title />
              <Navbar />
            </Box>
        }

      </Container>
    </Box>
  );
};
export default Header;
