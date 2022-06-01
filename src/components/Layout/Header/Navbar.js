import React, { useState } from "react";
import Link from "next/link";
import { Button, Box, Typography, Menu, MenuItem, Container } from "@mui/material";
import { useRouter } from "next/router";
import pages from "./pages";

const darkTheme = true;

const buttonStyle = {
  fontSize: "18px",
  fontWeight: 500,
  borderRadius: 0,
  py: 1.5
}

const NavBarItem = ({
  item,
}) => {
  const router = useRouter();
  const ative = router.pathname === item.to;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!item.children) {
    return (
      <Link href={item.to} passHref>
        <Button
          disableElevation
          sx={buttonStyle}
          fullWidth
          variant="contained"
          color={
            darkTheme
              ? ative
                ? "white"
                : "primary"
              : ative ?
                "primary"
                :
                "text"
          }>
          {item.title}
        </Button>
      </Link>
    )
  }
  return (
    <>
      <Button
        disableElevation
        sx={buttonStyle}
        onClick={handleClick}
        fullWidth
        variant="contained"
        color={
          darkTheme
            ? ative
              ? "white"
              : "primary"
            : ative ?
              "primary"
              :
              "text"
        }>
        {item.title}
      </Button>
      {
        item.children &&
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            item.children.map(c => (
              <Link key={c.to} href={c.to} passHref>
                <MenuItem
                  sx={{
                    justifyContent: "flex-start",
                    py: 2,
                    pr: 6
                  }}
                  onClick={handleClose}>
                  {c.title}
                </MenuItem>
              </Link>
            ))
          }
        </Menu>
      }
    </>

  )
}

const Navbar = () => {
  return (
    <Box
      backgroundColor={darkTheme ? "primary.main" : "inherit"}
      mt={1}
    >
      <Container>
        <Box
          display="flex"
          px={2}
          flexDirection="row"
          justifyContent="space-between">
          {
            pages.map(p =>
              <NavBarItem key={p.title} item={p} />)
          }
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
