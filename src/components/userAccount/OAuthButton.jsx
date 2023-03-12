import { Button, useTheme } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function OAuthButton() {
  const theme = useTheme();
  return (
    <>
      <Button
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
