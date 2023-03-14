import { Box, Container, Tabs, Tab, Fab, Drawer, useTheme } from "@mui/material";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { StyledAppBar, StyledToolbar } from "./customize";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const location = useLocation();

  const listItem = {
    cursor: "pointer",
    padding: "12px 0",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "600",
    borderBottomWidth: "3px",
    borderBottomColor: "transparent",
  };

  const listItemAfter = {
    color: `${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  };

  function pathMatchRoute(route) {
    return route === location.pathname ? listItemAfter : listItem;
  }

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
          <MobileMenu closeMenu={() => setDrawerOpen(false)} />
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
              value={false}
              sx={{
                display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                height: 0,
                justifyContent: "space-between",
                gap: "50px",
              }}
            >
              <Tab
                style={pathMatchRoute("/")}
                component={Link}
                to="/"
                label="Home"
                sx={{
                  textTransform: "none",
                }}
              />
              <Tab
                style={pathMatchRoute("/offers")}
                component={Link}
                to="/offers"
                label="Offers"
                sx={{ textTransform: "none" }}
              />
              <Tab
                style={pathMatchRoute("/sign-in")}
                component={Link}
                to="/sign-in"
                label="Sign in"
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
              />
            </Tabs>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar;
