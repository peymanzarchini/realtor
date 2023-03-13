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
import sigupPhoto from "../../assets/signup.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import OAuthButton from "./OAuthButton";
import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../../data/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function SignUp({ handleFalse }) {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const formData = {
    fullname,
    email,
    password,
  };

  const theme = useTheme();
  const navigate = useNavigate();

  function handleToggleShowPass() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: fullname,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Sign up was successful");
      navigate("/");
      setFullName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Something went wrong with the registration");
    }
  }

  return (
    <Box component="section">
      <Typography
        variant="h1"
        sx={{ fontSize: "1.875rem", textAlign: "center", marginTop: "1.5rem" }}
        fontWeight={`${theme.typography.fontWeightBold}`}
      >
        Sign Up
      </Typography>
      <Box component="div" sx={{ mt: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="start" justifyContent="center">
            <Grid item xs={12} sm={12} md={7} lg={6}>
              <Box component="div">
                <Avatar
                  src={sigupPhoto}
                  alt="signup"
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
              <Box component="form" onSubmit={handleSubmit} autoComplete="off">
                <TextField
                  name="fullname"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  fullWidth
                  type="text"
                  placeholder="Full name"
                  sx={{ mb: 4, backgroundColor: "#fff" }}
                />
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
                    Have a account?{" "}
                    <Link to="/sign-in" style={{ color: "red" }}>
                      Sign in
                    </Link>
                  </Typography>
                  <Typography variant="subtitle2">
                    <Link to="/forgot-password" onClick={handleFalse}>
                      Forgot password?
                    </Link>
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
                  sign up
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

export default SignUp;
