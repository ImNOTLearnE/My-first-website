// MATERIAL UI
import Typography from "@mui/material/Typography";

export default function NoRequests() {
  return (
    <>
      <div
        style={{
          width: 1450,
          height: 801,
          background:
            "linear-gradient(178deg,hsla(0, 0%, 21%, 0.50) 0%, rgba(38, 166, 154, 0.6) 100%)",
          borderRadius: "25px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
          marginTop: 10,
          overflowY: "scroll",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "right",
            marginTop: 46,
          }}
        >
          {/* 1 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2.2vh",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.30)",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
                width: 1240,
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
                لا توجد طلبات لك
              </Typography>
            </div>
          </div>
          {/* 1 */}
        </div>
      </div>
    </>
  );
}
