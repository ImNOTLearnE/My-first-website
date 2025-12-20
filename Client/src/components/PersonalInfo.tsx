// REACT
import * as React from "react";

// MATERIAL UI
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";

// MATERIAL ICON
import CreateIcon from "@mui/icons-material/Create";

// CSS
import "../Styles/ResponsiveSideBar.css";

// i18n
import { useTranslation } from "react-i18next";

// AXIOS
import axios from "axios";

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

export default function PersonalInfo({
  userPersonalInformationInput,
  setUserPersonalInformationInput,
}: {
  userPersonalInformationInput: {
    firstName: string;
    lastName: string;
    nationality: string;
    gender: string;
    email: string;
    phoneNumber: string;
    city: string;
    birthday: string;
  };
  setUserPersonalInformationInput: (value: any) => void;
}) {
  const { t } = useTranslation();

  //  USESTATE  //
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  //  USESTATE  //

  const handleChangeInformation = () => {
    axios
      .patch(
        `https://my-first-website-rgi1.onrender.com/users/${localStorage.getItem("token")}`,
        {
          FirstNameInput: userPersonalInformationInput.firstName,
          LastNameInput: userPersonalInformationInput.lastName,
          PhoneNumberInput: userPersonalInformationInput.phoneNumber,
          CityInput: userPersonalInformationInput.city,
          NationalityInput: userPersonalInformationInput.nationality,
          GenderInput: userPersonalInformationInput.gender,
          BirthdayInput: userPersonalInformationInput.birthday,
        }
      )
      .then(() => {
        // console.log(response);

        setOpen(true);
      })
      .catch((error) => {
        console.log(error.response.data);
        setOpenError(true);
      });
  };

  const personalInfo = [
    {
      id: 0,
      title: t("First name"),
      value: userPersonalInformationInput.firstName,
      onChange: (e: any) => {
        setUserPersonalInformationInput({
          ...userPersonalInformationInput,
          firstName: e.target.value,
        });
      },
    },
    {
      id: 1,
      title: t("Last name"),
      value: userPersonalInformationInput.lastName,
      onChange: (e: any) => {
        setUserPersonalInformationInput({
          ...userPersonalInformationInput,
          lastName: e.target.value,
        });
      },
    },
    {
      id: 2,
      title: t("Nationality"),
      value: userPersonalInformationInput.nationality,
      onChange: (e: any) => {
        setUserPersonalInformationInput({
          ...userPersonalInformationInput,
          nationality: e.target.value,
        });
      },
    },

    {
      id: 4,
      title: t("Birthday"),
      value: userPersonalInformationInput.birthday,
      onChange: (e: any) => {
        setUserPersonalInformationInput({
          ...userPersonalInformationInput,
          birthday: e.target.value,
        });
      },
    },
  ];

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
            The information was successfully modified
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
            خطأ في المعلومات المدخلة و لا يمكن ترك الحقول فارغة
          </Alert>
        </Snackbar>
        <Grid className="personalInfo">
          <div>
            <Typography marginRight={15} fontSize={32}>
              {t("Personal information")}
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "right",
                maxHeight: 800,
              }}
            >
              {personalInfo.map((input) => (
                <div
                  style={{ marginBottom: 60, marginRight: 51 }}
                  key={input.id}
                >
                  <Typography fontSize={32}>{input.title}</Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      sx={{ width: 350, input: { color: "#FFFFFF" } }}
                      InputLabelProps={{
                        sx: {
                          color: "#FFFFFF",
                          fontSize: "18px",
                        },
                      }}
                      id="filled-basic"
                      label={input.title}
                      value={input.value || ""}
                      onChange={input.onChange}
                      variant="filled"
                    />

                    {/*  ICON  */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          m: 1,
                          width: 48,
                          height: 55,
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
                        <Button
                          sx={{ height: 55 }}
                          onClick={() => {
                            handleChangeInformation();
                          }}
                        >
                          <CreateIcon
                            sx={{
                              color: "#ffffffff",
                              width: 20,
                              height: 20,
                            }}
                          />
                        </Button>
                      </Paper>
                    </Box>
                    {/*  ICON  */}
                  </div>
                </div>
              ))}
              <FormControl
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Select
                  defaultValue={"Male"}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  MenuProps={{
                    PaperProps: {
                      disableScrollLock: true,
                    },
                  }}
                  sx={{
                    background: "rgba(0, 0, 0, 0.30)",
                    color: "#FFFFFF",
                    borderRadius: 10,
                    fontSize: 24,
                    width: 350,
                  }}
                  onChange={(e: any) => {
                    setUserPersonalInformationInput({
                      ...userPersonalInformationInput,
                      gender: e.target.value,
                    });
                    console.log(userPersonalInformationInput);
                  }}
                  value={userPersonalInformationInput.gender}
                >
                  <MenuItem
                    className="select-position"
                    sx={{
                      fontSize: 24,
                      paddingY: 0.5,
                      paddingX: 1,
                    }}
                    value={"Male"}
                  >
                    Male
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontSize: 24,
                      paddingY: 0.5,
                      paddingX: 1,
                    }}
                    value={"Female"}
                  >
                    Female
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Grid>
      </ThemeProvider>
    </>
  );
}
