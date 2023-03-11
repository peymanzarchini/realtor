import { styled } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "#fff",
  color: "black",
  borderBottom: "1px",
  boxShadow: `${theme.shadows[1]}`,
  position: "sticky",
  top: 0,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    minHeight: 48,
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: 0,
  },
}));
