import * as React from "react";
// MATERIAL UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

// AXIOS
import axios from "axios";

// CSS
import "../Styles/ResponsiveOrders.css";

import NoRequests from "../components/NoRequests";
import ThereAreRequests from "../components/ThereAreRequests";
import SideBar from "../components/SideBar";

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

export default function ProfileOrders() {
  const token: string | null = localStorage.getItem("token");

  //  USESTATE  //
  const [requests, setRequests] = React.useState<any>(<ThereAreRequests />);

  //  USESTATE  //

  React.useEffect(() => {
    axios
      .post("http://localhost:3000/customerOrders", { userToken: token })
      .then((response) => {
        if (response.data.length === 0) {
          setRequests(<NoRequests />);
        } else <ThereAreRequests />;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Grid container spacing={15} display="flex">
            {/*  SIDE APP BAR  */}
            <SideBar />
            {/*  SIDE APP BAR  */}

            {/*  ORDERS  */}

            <Grid sx={{}}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      minWidth: {
                        xs: "20px", // للشاشات الصغيرة
                        sm: "14vw", // للشاشات الأكبر
                      },
                    }}
                  >
                    <FormControl fullWidth>
                      <Select
                        defaultValue={30}
                        inputProps={{
                          name: "age",
                          id: "uncontrolled-native",
                        }}
                        sx={{
                          background: "#D9D9D9",
                          borderRadius: 4,
                          border: "5px solid #707070",
                          fontSize: 24,
                          textAlign: "right",
                          width: {
                            xs: "40vw", // للشاشات الصغيرة
                            sm: "14vw", // للشاشات الأكبر
                          },
                        }}
                      >
                        <MenuItem
                          sx={{
                            fontSize: 24,
                          }}
                          value={10}
                        >
                          قيد التوصيل
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontSize: 24,
                          }}
                          value={30}
                        >
                          تم التوصيل
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px", // للشاشات الصغيرة
                        sm: "2.25rem", // للشاشات الأكبر
                      },
                    }}
                    marginLeft={"39px"}
                  >
                    status Product
                  </Typography>
                </div>

                <Typography
                  fontSize={48}
                  sx={{
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: {
                      xs: "20px", // للشاشات الصغيرة
                      sm: "3rem", // للشاشات الأكبر
                    },
                  }}
                >
                  الطلبيات
                </Typography>
              </div>

              <div style={{}}>{requests}</div>
            </Grid>
            {/*  ORDERS  */}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
