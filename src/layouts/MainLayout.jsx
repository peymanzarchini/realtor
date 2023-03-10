import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Box component="div">
        <Outlet />
      </Box>
    </>
  );
}

export default MainLayout;
