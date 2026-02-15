// MATERIAL UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// i18n
import { useTranslation } from "react-i18next";

export default function NoRequests() {
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          width: "70vw",
          height: 700,
          background:
            "linear-gradient(178deg,hsla(0, 0%, 21%, 0.50) 0%, rgba(38, 166, 154, 0.6) 100%)",
          borderRadius: "25px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
          marginTop: 10,
          marginLeft: { xs: "15vw", sm: "5vw" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",

            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* 1 */}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",

              alignItems: "center",
              marginBottom: "2.2vh",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.30)",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
                width: "100%",
                height: 283,
                borderRadius: 25,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ textAlign: "center" }}
                fontSize={42}
                marginRight={"3vh"}
                marginTop={13}
              >
                {t("No Requests")}
              </Typography>
            </Box>
          </Box>
          {/* 1 */}
        </Box>
      </Box>
    </>
  );
}
