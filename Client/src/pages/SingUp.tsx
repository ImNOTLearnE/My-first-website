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
    axios
      .post("http://localhost:3000/register", {
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
      .catch(() => {
        setOpenError(true);
      });
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
            <AlertTitle>Error</AlertTitle>
            اسم المستخدم او الايميل محجوز
          </Alert>
        </Snackbar>
        <Card
          sx={{
            width: "39vw",
            height: "70vh",
            background:
              "linear-gradient(178deg,hsla(0, 0%, 21%, 0.50) 0%, rgba(38, 166, 154, 0.6) 100%)",
            position: "absolute",
            top: "50%",
            left: " 50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
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
                  flexDirection: "column",
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                {/*  USERNAME  */}
                <div
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
                        width: "3.5vw",
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
                        width: "19.4vw",
                        height: 70,
                        color: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  ></TextField>
                  {/* USERNAME INPUT */}
                </div>
                {/*  USERNAME  */}

                {/*  EMAIL  */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "75PX",
                  }}
                >
                  {/* EMAIL ICON */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: "3.5vw",
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
                        width: "19.4vw",
                        height: 70,
                        color: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  ></TextField>
                  {/* EMAIL INPUT */}
                </div>
                {/*  EMAIL  */}

                {/*  PASSWORD  */}
                <div
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
                        width: "3.5vw",
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
                        width: "19.4vw",
                        height: 70,
                        color: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  ></TextField>
                  {/* PASSWORD INPUT*/}
                </div>
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
          </div>
        </Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="curve"></div>
          </div>
          <div>
            <div className="curveL"></div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
