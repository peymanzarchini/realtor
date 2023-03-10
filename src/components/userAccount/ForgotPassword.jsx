import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import forgotPassPhoto from "../../assets/forgotPass.jpg";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import OAuthButton from "./OAuthButton";
import { useState } from "react";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const theme = useTheme();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  }

  return (
    <Box component="section">
      <Typography
        variant="h1"
        sx={{ fontSize: "1.875rem", textAlign: "center", marginTop: "1.5rem" }}
        fontWeight={`${theme.typography.fontWeightBold}`}
      >
        Forgot Password
      </Typography>
      <Box component="div" sx={{ mt: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={12} md={7} lg={6}>
              <Box component="div">
                <Avatar
                  src={forgotPassPhoto}
                  alt="forgotPass"
                  variant="rounded"
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "80%",
                      md: "100%",
                      lg: "100%",
                    },
                    margin: {
                      sm: "0 auto",
                    },
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={5} lg={6}>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  type="email"
                  placeholder="Email address"
                  sx={{ mb: 4, backgroundColor: "#fff" }}
                />

                <Box
                  component="div"
                  sx={{
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography component="span" variant="subtitle2">
                    Don't have a account?{" "}
                    <Link to="/sign-up" style={{ color: "red" }}>
                      Register
                    </Link>
                  </Typography>
                  <Typography variant="subtitle2">
                    <Link to="/sign-in">Sign in instead</Link>
                  </Typography>
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    backgroundColor: `${theme.palette.secondary.light}`,
                    ":hover": {
                      backgroundColor: `${theme.palette.secondary.main}`,
                    },
                  }}
                >
                  send reset email
                </Button>
                <Divider sx={{ mt: 3 }}>
                  <Chip label="OR" />
                </Divider>
                <OAuthButton />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
