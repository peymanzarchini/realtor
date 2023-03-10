import { Box, Container, Tabs, Tab } from "@mui/material";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { StyledAppBar, StyledToolbar } from "./Customize";
import { a11yProps } from "./helpers";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <StyledToolbar>
          <Box component="div">
            <Box component="img" src={logo} alt="logo" sx={{ height: "1.25rem" }} />
          </Box>
          <Box component="div">
            <Tabs value={value} onChange={handleChange}>
              <Tab
                label="Home"
                {...a11yProps(0)}
                onClick={() => navigate("/")}
                sx={{ textTransform: "none" }}
              />
              <Tab
                label="Offers"
                {...a11yProps(1)}
                onClick={() => navigate("/offers")}
                sx={{ textTransform: "none" }}
              />
              <Tab
                label="Sign in"
                {...a11yProps(2)}
                onClick={() => navigate("/sign-in")}
                sx={{ textTransform: "none" }}
              />
            </Tabs>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar;
