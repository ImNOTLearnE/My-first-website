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

export default function Category() {
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
          <div style={{ marginLeft: "15vh" }}>Browse By Category</div>
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
                <PhoneIphoneIcon sx={{ fontSize: 35, marginBottom: "5px" }} />
                <div>Phones</div>
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
                <div>Watches</div>
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
                <CameraAltIcon sx={{ fontSize: 35, marginBottom: "5px" }} />
                <div>Cameras</div>
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
                <div>Heads</div>
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
                <div>Computers</div>
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
                <div>Gaming</div>
              </Box>
            </Button>

            {/* CATEGORY SECTION */}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
