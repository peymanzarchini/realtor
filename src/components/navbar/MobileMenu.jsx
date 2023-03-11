import { Box, IconButton, Tabs, Tab, Divider, useTheme } from "@mui/material";
import { GitHub, Instagram, Facebook, Twitter } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { a11yProps } from "../../helpers/helpers";
import logo from "../../assets/logo.svg";

function MobileMenu({ closeMenu, value, handleChange }) {
  const theme = useTheme();

  return (
    <Box component="div" sx={{ textAlign: "center", height: "100vh" }}>
      <Box component="img" src={logo} alt="logo" sx={{ height: "1.25rem", margin: "20px 0" }} />

      <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
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

      <Tabs value={value} onChange={handleChange} orientation="vertical" sx={{ mt: 2 }}>
        <Tab
          component={Link}
          to="/"
          label="Home"
          {...a11yProps(0)}
          sx={{ textTransform: "none" }}
          onClick={closeMenu}
        />
        <Tab
          component={Link}
          to="/offers"
          label="Offers"
          {...a11yProps(1)}
          sx={{ textTransform: "none" }}
          onClick={closeMenu}
        />
        <Tab
          component={Link}
          to="/sign-in"
          label="Sign in"
          {...a11yProps(2)}
          sx={{ textTransform: "none" }}
          onClick={closeMenu}
        />
      </Tabs>
    </Box>
  );
}

export default MobileMenu;
