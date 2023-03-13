import { Button, useTheme } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../data/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function OAuthButton() {
  const theme = useTheme();
  const navigate = useNavigate();

  async function handleGoogleAuth() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }

  return (
    <>
      <Button
        type="button"
        onClick={handleGoogleAuth}
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          backgroundColor: `${theme.palette.primary.light}`,
          ":hover": {
            backgroundColor: `${theme.palette.primary.main}`,
          },
        }}
      >
        <GoogleIcon sx={{ mr: 1 }} />
        Continue With Google
      </Button>
    </>
  );
}

export default OAuthButton;
