import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "../Styles/Curve.css";

// ICON
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

// AXIOS
import axios from "axios";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// i18n
import { useTranslation } from "react-i18next";

const theme = createTheme({
  palette: {
    mode: "light", // أو 'dark'
    primary: {
      main: "#009688",
      dark: "#0066CC",
    },

    // بإمكانك تضيف تخصيصات أخرى هنا
  },
});

export default function SingUp() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // USESTATE HOOK //
  const [userSignUp, setUserSignUp] = React.useState({
    userNameInput: "",
    EmailInput: "",
    passwordInput: "",
  });
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  // USESTATE HOOK //

  function handleSignUpBtn() {
    if (
      userSignUp.EmailInput.endsWith("@gmail.com") ||
      userSignUp.EmailInput.endsWith("@yahoo.com")
    ) {
      axios
        .post("https://my-first-website-rgi1.onrender.com/register", {
          userNameInput: userSignUp.userNameInput,
          passwordInput: userSignUp.passwordInput,
          emailInput: userSignUp.EmailInput,
          phoneNumberInput: "",
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          setOpen(true);

          navigate("/");
          navigate(0);
        })
        .catch((e) => {
          setOpenError(true);
          console.error("There was an error!", e);
        });
    } else {
      setOpenError(true);

      return alert(t("Please enter a valid email address"));
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          sx={{ position: "fixed", opacity: 0.9 }}
        >
          <Alert
            sx={{ fontSize: 20, background: "#242424ff", color: "#FFFFFF" }}
            severity="success"
            onClose={() => setOpen(false)}
          >
            <AlertTitle>WELCOME</AlertTitle>
            Register successful
          </Alert>
        </Snackbar>

        <Snackbar
          open={openError}
          autoHideDuration={2000}
          onClose={() => setOpenError(false)}
          sx={{ position: "fixed", opacity: 0.9 }}
        >
          <Alert
            sx={{ fontSize: 20, background: "#5a1c1cff", color: "#FFFFFF" }}
            severity="error"
            onClose={() => setOpenError(false)}
          >
            <AlertTitle>{t("Error")}</AlertTitle>
            {t("wrong information entered and fields cannot be left blank")}
          </Alert>
        </Snackbar>
        <Card
          sx={{
            width: {
              xs: "85vw",
              sm: "70vw",
              md: "50vw",
              lg: "40vw",
              xl: "39vw",
            },
            height: { xs: "65vh", sm: "65vh", md: "65vh", lg: "64vh" },
            background:
              "linear-gradient(178deg,hsla(0, 0%, 21%, 0.50) 0%, rgba(38, 166, 154, 0.6) 100%)",
            position: "absolute",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow:
                "5px 5px 20px 0px rgba(54, 54, 54, 0.7), 5px 5px 20px 0px rgba(38, 166, 153, 0.8)",
            },
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/*  USERNAME AND PASSWORD AND EMAIL INPUT  */}
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "#26A69A",
                  fontSize: 36,
                  textAlign: "center",
                }}
              >
                SIGNUP NOW !
              </Typography>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  "& > :not(style)": {},
                }}
              >
                {/*  USERNAME  */}
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* USERNAME ICON */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: { xs: "10vw", sm: "4vw", md: "4vw" },
                        height: 70,
                      },
                      opacity: "0.3",
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        background: "#000000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PersonIcon
                        sx={{
                          color: "#ffffffff",
                          width: 30,
                          height: 35,
                        }}
                      />
                    </Paper>
                  </Box>
                  {/* USERNAME ICON */}

                  {/* USERNAME INPUT */}
                  <TextField
                    id="filled-basic"
                    label="Username"
                    variant="filled"
                    value={userSignUp.userNameInput}
                    onChange={(e) => {
                      setUserSignUp({
                        ...userSignUp,
                        userNameInput: e.target.value,
                      });
                    }}
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      "& > :not(style)": {
                        width: { xs: "40vw", sm: "30vw", md: "19.4vw" },
                        height: 70,
                        color: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  ></TextField>
                  {/* USERNAME INPUT */}
                </Box>
                {/*  USERNAME  */}

                {/*  EMAIL  */}
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "75px",
                  }}
                >
                  {/* EMAIL ICON */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: { xs: "10vw", sm: "4vw", md: "4vw" },
                        height: 70,
                      },
                      opacity: "0.3",
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        background: "#000000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <EmailIcon
                        sx={{
                          color: "#ffffffff",
                          width: 30,
                          height: 35,
                        }}
                      />
                    </Paper>
                  </Box>
                  {/* EMAIL ICON */}

                  {/* EMAIL INPUT */}
                  <TextField
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                    value={userSignUp.EmailInput}
                    onChange={(e) => {
                      setUserSignUp({
                        ...userSignUp,
                        EmailInput: e.target.value,
                      });
                    }}
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      "& > :not(style)": {
                        width: { xs: "40vw", sm: "30vw", md: "19.4vw" },
                        height: 70,
                        color: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  ></TextField>
                  {/* EMAIL INPUT */}
                </Box>
                {/*  EMAIL  */}

                {/*  PASSWORD  */}
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "75PX",
                  }}
                >
                  {/* PASSWORD ICON */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: { xs: "10vw", sm: "4vw", md: "4vw" },
                        height: 70,
                      },
                      opacity: "0.3",
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        background: "#000000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <VpnKeyIcon
                        sx={{
                          color: "#ffffffff",
                          width: 30,
                          height: 35,
                        }}
                      />
                    </Paper>
                  </Box>
                  {/* PASSWORD ICON */}

                  {/* PASSWORD INPUT*/}
                  <TextField
                    id="filled-basic"
                    label="Password"
                    type="password"
                    variant="filled"
                    onChange={(e) => {
                      setUserSignUp({
                        ...userSignUp,
                        passwordInput: e.target.value,
                      });
                    }}
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      "& > :not(style)": {
                        width: { xs: "40vw", sm: "30vw", md: "19.4vw" },
                        height: 70,
                        color: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  ></TextField>
                  {/* PASSWORD INPUT*/}
                </Box>
                {/*  PASSWORD  */}
              </CardActions>
            </CardContent>
            {/*  USERNAME AND PASSWORD AND EMAIL INPUT  */}

            {/*  REGISTER BUTTONS  */}
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#26A69A",
                  color: "#000000",
                  width: "32vw",
                  height: "6vh",
                }}
                onClick={handleSignUpBtn}
              >
                REGISTER
              </Button>
            </CardActions>
            {/*  REGISTER BUTTONS  */}

            <hr
              style={{
                width: 700,
                height: 5,
                marginTop: 30,
                background: "#242424",
                border: "none",
              }}
            />
          </Box>
        </Card>
      </ThemeProvider>
    </>
  );
}
