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

const ContactInfoComponent = React.memo(
  ({ input, handleChangeInformation }: any) => {
    return (
      <div style={{ marginBottom: 74, marginRight: 51 }} key={input.id}>
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
            disabled={input.disabled}
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
                disabled={input.disabled}
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
    );
  }
);

export default function ContactInfo({
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

  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const contactInformation = [
    {
      id: 0,
      title: t("Email"),
      value: userPersonalInformationInput.email,
      onChange: (e: any) => {
        setUserPersonalInformationInput({
          ...userPersonalInformationInput,
          email: e.target.value,
        });
      },
      disabled: true,
    },
    {
      id: 1,
      title: t("Phone number"),
      value: userPersonalInformationInput.phoneNumber,
      onChange: (e: any) => {
        setUserPersonalInformationInput({
          ...userPersonalInformationInput,
          phoneNumber: e.target.value,
        });
      },
    },
    {
      id: 2,
      title: t("City"),
      value: userPersonalInformationInput.city,
      onChange: (e: any) => {
        setUserPersonalInformationInput({
          ...userPersonalInformationInput,
          city: e.target.value,
        });
      },
    },
  ];

  const handleChangeInformation = React.useCallback(() => {
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
        }
      )
      .then((response) => {
        console.log(response);

        setOpen(true);
      })
      .catch((error) => {
        console.log(error.response.data);
        setOpenError(true);
      });
  }, [userPersonalInformationInput]);
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
        <Grid className="contactInfo">
          <div>
            <Typography marginRight={15} fontSize={32}>
              {t("Contact information")}
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {contactInformation.map((input) => (
                <ContactInfoComponent
                  key={input.id}
                  input={input}
                  handleChangeInformation={handleChangeInformation}
                />
              ))}
            </div>
          </div>
        </Grid>
      </ThemeProvider>
    </>
  );
}
