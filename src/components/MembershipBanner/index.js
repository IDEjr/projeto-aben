import React from "react";
import style from "./MembershipBanner.module.css";
import { ButtonBase } from "../ButtonBase/index";
import Image from "next/image";
import nurseImg from "../../../public/images/nurse.svg";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";

const MembershipBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const handleClick = () => router.push("/associese");

  return (
    <Box sx={{
      backgroundColor: "primary.main",
    }}>
      <Container sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
      }}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          {
            !isMobile &&
            <Image height="800px" width="800px" src={nurseImg} alt="imagem de enfermeira" />
          }
          <Box py={6} pl={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
            <Typography variant="h3" color="text.contrast">
              Seja um associado da ABEN-RS!
            </Typography>
            <Typography color="text.contrast" sx={{my: 4}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              lectus eget risus convallis pulvinar sed consequat scelerisque nibh.
              Quis etiam felis egestas sapien nec rhoncus, ut pellentesque.
            </Typography>
            <Button
              sx={{
                mt: 2,
                marginRight: "auto"
              }}
              variant="contained"
              color="secondary"
              onClick={handleClick}
            >
              Associe-se {"\u2794"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box >
  );
};

export default MembershipBanner;
