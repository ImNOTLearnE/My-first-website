import React from "react";

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

// i18n
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

// REACT ROUTER
import { Link } from "react-router-dom";

const CategoryItem = React.memo(({ item, t }: any) => {
  return (
    <Link key={item.id} to={item.path} style={{ textDecoration: "none" }}>
      <Button sx={{ color: "#000000" }}>
        <Box
          sx={{
            width: { xs: "90px", md: "6vw" },
            height: { xs: "8vh", md: "10vh" },
            borderRadius: 5,
            bgcolor: "primary.main",
            transition: "box-shadow, color 0.3s ease-in-out",
            "&:hover": {
              boxShadow:
                "5px 5px 20px 0px rgba(54, 54, 54, 0.7), 1px 3px 10px 5px rgba(38, 166, 153, 0.8)",
              color: "#FFFFFF",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>{item.logo}</Box>

          <Box>
            <Typography sx={{ fontSize: { xs: "0.6em", md: "0.8vw" } }}>
              {t(item.name)}
            </Typography>
          </Box>
        </Box>
      </Button>
    </Link>
  );
});
const theme = createTheme({
  palette: {
    mode: "light", // أو 'dark'
    primary: {
      main: "#009688",
      dark: "#005f56",
    },
    // بإمكانك تضيف تخصيصات أخرى هنا
  },
});
export default function Category() {
  // USESATATE //
  const [category] = React.useState([
    {
      id: 1,
      name: "Phones",
      logo: (
        <PhoneIphoneIcon
          sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
        />
      ),
      path: "/ProductsCategory",
    },
    {
      id: 2,
      name: "Watches",
      logo: (
        <WatchIcon sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }} />
      ),
      path: "/ProductsCategory",
    },
    {
      id: 3,
      name: "Cameras",
      logo: (
        <CameraAltIcon
          sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
        />
      ),
      path: "/ProductsCategory",
    },
    {
      id: 4,
      name: "Headphones",
      logo: (
        <HeadphonesIcon
          sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
        />
      ),
      path: "/ProductsCategory",
    },
    {
      id: 5,
      name: "Computers",
      logo: (
        <ComputerIcon
          sx={{ fontSize: { xs: 25, md: 35 }, marginBottom: "5px" }}
        />
      ),
      path: "/ProductsCategory",
    },
  ]);
  // USESATATE //

  const { t } = useTranslation();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ marginTop: "20vh" }}>
          {/* TITLE OF CATEGORY */}
          <div style={{ marginLeft: "15vh" }}>{t("Browse By Category")}</div>
          {/* TITLE OF CATEGORY */}

          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {/* CATEGORY BOX SECTION */}

            {category.map((item) => (
              <CategoryItem key={item.id} item={item} t={t} />
            ))}
            {/* CATEGORY SECTION */}
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
}
