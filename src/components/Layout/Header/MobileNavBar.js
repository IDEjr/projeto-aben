import React, { useState } from 'react';
import logoAben from "/public/images/logoAben.jpg";
import Image from "next/image";
import Link from "next/link";
import { Box, Divider, Drawer, IconButton, ListItem, MenuItem, Typography } from "@mui/material";
import pages from './pages';
import { Menu } from '@mui/icons-material';


const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(true);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="#ffffff">
        <Box
          backgroundColor="#ffffff"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="80px"
          mr={2}
          py={1}
        >
          <Box width="50px">
            <Image src={logoAben} alt="ABEN LOGO" />
          </Box>
        </Box>
        <Typography variant="h3">
          ABEn-RS
        </Typography>
        <IconButton
          sx={{
            mr: 4
          }}
          color="text"
          onClick={() => setOpen(true)}
        >
          <Menu size="large" />
        </IconButton>
      </Box>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          width={1}
          display="flex"
          flexDirection="column"
          alignItems="center">
          <Box width="110px" py={3}>
            <Image src={logoAben} alt="ABEN LOGO" />
          </Box>
        </Box>
        <Divider />
        {
          pages.map(p => (
            <ListItem key={p.title}>
              {
                p.children ?
                  <Box >
                    <Typography
                      sx={{
                        pl: 2
                      }}>
                      {p.title}
                    </Typography>
                    {p.children.map(c => (
                      <Link key={c.to} href={c.to} passHref>
                        <MenuItem
                          sx={{
                            justifyContent: "flex-start",
                            my: 1,
                            py: 1,
                            pr: 6,
                            ml: 2,
                          }}
                          onClick={() => setOpen(false)}>
                          {c.title}
                        </MenuItem>
                      </Link>
                    ))}
                  </Box>
                  :
                  <Link key={p.to} href={p.to} passHref>
                    <MenuItem
                      sx={{
                        justifyContent: "flex-start",
                        py: 1,
                        pr: 6
                      }}
                      onClick={() => setOpen(false)}>
                      {p.title}
                    </MenuItem>
                  </Link>
              }
            </ListItem>
          ))
        }
      </Drawer>
    </>
  )
}

export default MobileNavBar;
