import React, { useState } from "react";
import Link from "next/link";
import { Button, Box, Typography, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import pages from "./pages";

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
          fullWidth
          color={
            ative ?
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
        onClick={handleClick}
        fullWidth
        color={
          ative ?
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
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      py={1}
    >
      {
        pages.map(p =>
          <NavBarItem key={p.title} item={p} />)
      }
    </Box>
  );
};

export default Navbar;
