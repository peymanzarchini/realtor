import { Container, TextField, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Profile() {
  const theme = useTheme();
  return (
    <>
      <Box component="section">
        <Typography
          variant="h1"
          sx={{ fontSize: "1.875rem", textAlign: "center", marginTop: "1.5rem" }}
          fontWeight={`${theme.typography.fontWeightBold}`}
        >
          My Profile
        </Typography>
        <Box component="div" sx={{ marginTop: "1.5rem" }}>
          <Container maxWidth="sm">
            <Box component="form">
              <TextField type="text" fullWidth sx={{ mb: "1.5rem", backgroundColor: "#fff" }} />
              <TextField type="email" fullWidth sx={{ backgroundColor: "#fff" }} />

              <Box
                component="div"
                sx={{
                  mt: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography component="span" variant="subtitle2">
                  Do want to change your name ?{" "}
                  <Link to="/sign-in" style={{ color: "red" }}>
                    Edit
                  </Link>
                </Typography>
                <Typography variant="subtitle2">
                  <Link to="/">Sign out</Link>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
