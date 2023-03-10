import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import siginPhoto from "../../assets/signin.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuthButton from "./OAuthButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad user credentials");
    }
  }

  function handleToggleShowPass() {
    setShowPassword(!showPassword);
  }

  const theme = useTheme();
  return (
    <Box component="section">
      <Typography
        variant="h1"
        sx={{ fontSize: "1.875rem", textAlign: "center", marginTop: "1.5rem" }}
        fontWeight={`${theme.typography.fontWeightBold}`}
      >
        Sign In
      </Typography>
      <Box component="div" sx={{ mt: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={12} md={7} lg={6}>
              <Box component="div">
                <Avatar
                  src={siginPhoto}
                  alt="signin"
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
                <TextField
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  sx={{ backgroundColor: "#fff" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? (
                          <VisibilityOffIcon
                            sx={{ cursor: "pointer" }}
                            onClick={handleToggleShowPass}
                          />
                        ) : (
                          <RemoveRedEyeIcon
                            sx={{ cursor: "pointer" }}
                            onClick={handleToggleShowPass}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />

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
                    Don't have a account?{" "}
                    <Link to="/sign-up" style={{ color: "red" }}>
                      Register
                    </Link>
                  </Typography>
                  <Typography variant="subtitle2">
                    <Link to="/forgot-password">Forgot password?</Link>
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
                  sign in
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

export default SignIn;
