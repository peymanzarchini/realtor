import { Box, Container, Tabs, Tab, Fab, Drawer, useTheme } from "@mui/material";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { StyledAppBar, StyledToolbar } from "./customize";
import { a11yProps } from "../../helpers/helpers";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu";

function Navbar({ value, handleChange, handleFalse }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <Drawer
          open={drawerOpen}
          variant="temporary"
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: 300,
            },
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <MobileMenu
            closeMenu={() => setDrawerOpen(false)}
            value={value}
            handleChange={handleChange}
            handleFalse={handleFalse}
          />
        </Drawer>

        <StyledToolbar>
          <Box component="div">
            <Link to={"/"}>
              <Box component="img" src={logo} alt="logo" sx={{ height: "1.25rem" }} />
            </Link>
          </Box>
          <Box component="div">
            <Fab
              size="small"
              color="primary"
              aria-label="hamburger-menu"
              sx={{ display: { xs: "block", sm: "none", md: "none", lg: "none" } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", mx: "auto" }}
              />
            </Fab>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                height: 0,
                justifyContent: "space-between",
                gap: "50px",
              }}
            >
              <Tab
                component={Link}
                to="/"
                label="Home"
                {...a11yProps(0)}
                sx={{
                  textTransform: "none",
                }}
              />
              <Tab
                component={Link}
                to="/offers"
                label="Offers"
                {...a11yProps(1)}
                sx={{ textTransform: "none" }}
              />
              <Tab
                component={Link}
                to="/sign-in"
                label="Sign in"
                {...a11yProps(2)}
                sx={{
                  textTransform: "none",
                }}
              />

              <Tab
                component={Link}
                to="/sign-up"
                label="Sign up"
                sx={{
                  backgroundColor: `${theme.palette.primary.main}`,
                  borderRadius: "50px",
                  textTransform: "none",
                  minHeight: 0,
                  margin: "auto 20px",
                  color: "white",
                }}
                onClick={handleFalse}
              />
            </Tabs>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar;
