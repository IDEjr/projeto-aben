import { Container } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Title from "./Title.js";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import MobileNavBar from "./MobileNavBar";

const Header = ({ contato }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box backgroundColor="#ffffff">
      {
        isMobile ?
          <Container disableGutters>
            <MobileNavBar />
          </Container>

          :
          <Box>
            <Box pt={2} px={3}>
              <Container disableGutters>
                <Title {...{ contato }} />
              </Container>
            </Box>
            <Navbar />
          </Box>
      }

    </Box>
  );
};
export default Header;
