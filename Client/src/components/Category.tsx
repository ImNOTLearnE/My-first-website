// MATERIAL UI
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

// MATERIAL ICON
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WatchIcon from "@mui/icons-material/Watch";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ComputerIcon from "@mui/icons-material/Computer";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

// i18n
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export default function Category() {
  const { t } = useTranslation();

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ marginTop: "20vh" }}>
          {/* TITLE OF CATEGORY */}
          <div style={{ marginLeft: "15vh" }}>{t("Browse By Category")}</div>
          {/* TITLE OF CATEGORY */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {/* CATEGORY BOX SECTION */}
            {/* <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: { xs: "10vw", md: "6vw" },
                  height: { xs: "8vh", md: "10vh" },
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <PhoneIphoneIcon
                    sx={{ fontSize: { sx: 25, md: 35 }, marginBottom: "5px" }}
                  />
                  <Typography sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}>
                    {t("Phones")}
                  </Typography>
                </Box>
              </Box>
            </Button>
            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: 120,
                  height: 100,
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <WatchIcon sx={{ fontSize: 35, marginBottom: "5px" }} />
                <div>{t("Watches")}</div>
              </Box>
            </Button>

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: { xs: "10vw", md: "6vw" },
                  height: { xs: "8vh", md: "10vh" },
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CameraAltIcon
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1rem" },
                    marginBottom: "5px",
                  }}
                />
                <Typography sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}>
                  {t("Cameras")}
                </Typography>
              </Box>
            </Button>

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: 120,
                  height: 100,
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HeadphonesIcon sx={{ fontSize: 35, marginBottom: "5px" }} />
                <div>{t("HeadsPhone")}</div>
              </Box>
            </Button>

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: 120,
                  height: 100,
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ComputerIcon sx={{ fontSize: 35, marginBottom: "5px" }} />
                <div>{t("Computers")}</div>
              </Box>
            </Button>

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: 120,
                  height: 100,
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SportsEsportsIcon sx={{ fontSize: 35, marginBottom: "5px" }} />
                <div>{t("Gaming")}</div>
              </Box>
            </Button> */}

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: { xs: "10vw", md: "6vw" },
                  height: { xs: "8vh", md: "10vh" },
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PhoneIphoneIcon
                  sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
                />
                <Typography sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}>
                  {t("Phones")}
                </Typography>
              </Box>
            </Button>

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: { xs: "10vw", md: "6vw" },
                  height: { xs: "8vh", md: "10vh" },
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <WatchIcon
                  sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
                />
                <Typography sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}>
                  {t("Watches")}
                </Typography>
              </Box>
            </Button>

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: { xs: "10vw", md: "6vw" },
                  height: { xs: "8vh", md: "10vh" },
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CameraAltIcon
                  sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
                />
                <Typography sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}>
                  {t("Cameras")}
                </Typography>
              </Box>
            </Button>

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: { xs: "10vw", md: "6vw" },
                  height: { xs: "8vh", md: "10vh" },
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HeadphonesIcon
                  sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
                />
                <Typography sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}>
                  {t("HeadsPhone")}
                </Typography>
              </Box>
            </Button>

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: { xs: "10vw", md: "6vw" },
                  height: { xs: "8vh", md: "10vh" },
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ComputerIcon
                  sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
                />
                <Typography sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}>
                  {t("Computers")}
                </Typography>
              </Box>
            </Button>

            <Button style={{ color: "#FFFFFF" }}>
              <Box
                sx={{
                  width: { xs: "10vw", md: "6vw" },
                  height: { xs: "8vh", md: "10vh" },
                  borderRadius: 5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SportsEsportsIcon
                  sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
                />
                <Typography sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}>
                  {t("Gaming")}
                </Typography>
              </Box>
            </Button>

            {/* CATEGORY SECTION */}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
