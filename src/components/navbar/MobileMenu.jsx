import { Box, IconButton, Tabs, Tab, Divider, useTheme, Fab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { GitHub, Instagram, Facebook, Twitter } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";
import { a11yProps } from "../../helpers/helpers";
import logo from "../../assets/logo.svg";

function MobileMenu({ closeMenu }) {
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
  };

  function pathMatchRoute(route) {
    return route === location.pathname ? listItemAfter : listItem;
  }

  return (
    <Box component="div" sx={{ textAlign: "center", height: "100vh" }}>
      <Fab
        size="small"
        color="primary"
        aria-label="close-menu"
        onClick={closeMenu}
        sx={{ position: "absolute", top: "5px", right: "10px" }}
      >
        <CloseIcon />
      </Fab>

      <Link to={"/"} onClick={closeMenu}>
        <Box component="img" src={logo} alt="logo" sx={{ height: "1.25rem", mt: 8 }} />
      </Link>

      <Box component="div" sx={{ m: "20px auto", textAlign: "center" }}>
        <IconButton
          aria-label="Github"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <a href="#" rel="noopener noreferrer">
            <GitHub
              sx={{
                color: "gray",
                "&:hover": {
                  color: `${theme.palette.primary.main}`,
                },
              }}
            />
          </a>
        </IconButton>
        <IconButton
          aria-label="Instagram"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <a href="#" rel="noopener noreferrer">
            <Instagram
              sx={{
                color: "gray",
                "&:hover": {
                  color: `${theme.palette.primary.main}`,
                },
              }}
            />
          </a>
        </IconButton>
        <IconButton
          aria-label="Facebook"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <a href="#" rel="noopener noreferrer">
            <Facebook
              sx={{
                color: "gray",
                "&:hover": {
                  color: `${theme.palette.primary.main}`,
                },
              }}
            />
          </a>
        </IconButton>
        <IconButton
          aria-label="Twitter"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <a href="#" rel="noopener noreferrer">
            <Twitter
              sx={{
                color: "gray",
                "&:hover": {
                  color: `${theme.palette.primary.main}`,
                },
              }}
            />
          </a>
        </IconButton>
      </Box>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

      <Tabs value={false} orientation="vertical" sx={{ mt: 2 }}>
        <Tab
          style={pathMatchRoute("/")}
          component={Link}
          to="/"
          label="Home"
          sx={{ textTransform: "none" }}
          onClick={closeMenu}
        />
        <Tab
          style={pathMatchRoute("/offers")}
          component={Link}
          to="/offers"
          label="Offers"
          sx={{ textTransform: "none" }}
          onClick={closeMenu}
        />
        <Tab
          style={pathMatchRoute("/sign-in")}
          component={Link}
          to="/sign-in"
          label="Sign in"
          {...a11yProps(2)}
          sx={{ textTransform: "none" }}
          onClick={closeMenu}
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
            color: "white",
            margin: "15px 20px",
          }}
          onClick={closeMenu}
        />
      </Tabs>
    </Box>
  );
}

export default MobileMenu;
