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

// AXIOS
import axios from "axios";

// REACT ROUTER
import { useNavigate, Link } from "react-router-dom";

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

export default function Login() {
  const navigate = useNavigate();

  // USESTATE HOOK //
  const [userLogin, setUserLogin] = React.useState({
    userNameInput: "",
    passwordInput: "",
  });
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  // USESTATE HOOK //

  function handleLoginBtn() {
    axios
      .post("http://localhost:3000/login", {
        userNameInput: userLogin.userNameInput,
        passwordInput: userLogin.passwordInput,
      })
      .then((response) => {
        console.log(response.data.token);
        setOpen(true);
        localStorage.setItem("token", response.data.token);
        navigate("/");
        navigate(0);
      })
      .catch((error) => {
        console.log(error.response.data);
        return setOpenError(true);
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
            Login successful
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
            اسم المستخدم او كلمة المرور غير صحيحة
          </Alert>
        </Snackbar>
        <Card
          sx={{
            width: {
              xs: "90vw",
              sm: "70vw",
              md: "50vw",
              lg: "40vw",
              xl: "39vw",
            },
            height: { xs: "80vh", sm: "70vh", md: "65vh", lg: "60vh" },
            background:
              "linear-gradient(178deg,rgba(54, 54, 54, 0.5) 0%, rgba(38, 166, 154, 0.6) 100%)",

            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow:
                "5px 5px 20px 0px rgba(54, 54, 54, 0.7), 5px 5px 20px 0px rgba(38, 166, 153, 0.8)",
            },
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
            {/* USERNAME AND PASSWORD INPUT */}
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "#26A69A",
                  fontSize: 36,
                  textAlign: "center",
                }}
              ></Typography>
              <CardActions
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                {/* USERNAME INPUT*/}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: { sx: "3.5vw", sm: "4vw", md: "4vw" },
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
                          width: "9.5vw",
                          height: 35,
                        }}
                      />
                    </Paper>
                  </Box>
                  <TextField
                    id="filled-basic"
                    label="Username"
                    variant="filled"
                    value={userLogin.userNameInput}
                    onChange={(e) => {
                      setUserLogin({
                        ...userLogin,
                        userNameInput: e.target.value,
                      });
                    }}
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      "& > :not(style)": {
                        width: { sx: "50vw", sm: "30vw", md: "19.4vw" },
                        height: 70,
                        color: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  />
                </div>
                {/* USERNAME INPUT*/}

                {/* PASSWORD INPUT*/}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "61px",
                    marginBottom: "61px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: "9.5vw",
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
                          width: "7vw",
                          height: 35,
                        }}
                      />
                    </Paper>
                  </Box>
                  <TextField
                    id="filled-basic"
                    label="Password"
                    variant="filled"
                    type="password"
                    onChange={(e) => {
                      setUserLogin({
                        ...userLogin,
                        passwordInput: e.target.value,
                      });
                    }}
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      "& > :not(style)": {
                        width: { sx: "50vw", sm: "30vw", md: "19.4vw" },
                        height: 70,
                        color: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  />
                </div>
                {/* PASSWORD INPUT*/}
              </CardActions>
            </CardContent>
            {/* USERNAME AND PASSWORD INPUT */}

            {/* LOGIN AND REGISTER BUTTONS */}
            {/* LOGIN BUTTONS */}
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  width: { xs: "60vw", sm: "40vw", md: "32vw" },
                  height: "6vh",
                }}
                className="btnHover"
                onClick={() => {
                  handleLoginBtn();
                }}
              >
                LOGIN
              </Button>
            </CardActions>
            {/* LOGIN BUTTONS */}

            <hr
              style={{
                width: 700,
                height: 5,
                marginTop: 20,
                marginBottom: 40,
                background: "#242424",
                border: "none",
              }}
            />

            {/* REGISTER BUTTONS */}
            <CardActions>
              <Link to="/SingUp">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#26A69A",
                    color: "#000000",
                    width: { xs: "60vw", sm: "40vw", md: "32vw" },
                    height: "6vh",
                  }}
                >
                  REGISTER
                </Button>
              </Link>
            </CardActions>
            {/* REGISTER BUTTONS */}
            {/* LOGIN AND REGISTER BUTTONS */}
          </div>
        </Card>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="curve"></div>
          </div>
          <div>
            <div className="curveL"></div>
          </div>
        </div> */}
      </ThemeProvider>
    </>
  );
}
