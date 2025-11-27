// MATERIAL UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function CartEmbty() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size="grow"
          minHeight={900}
        >
          <Typography>The cart is empty</Typography>
        </Grid>
      </Box>
    </>
  );
}
