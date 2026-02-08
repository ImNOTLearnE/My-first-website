import * as React from "react";
// MATERIAL UI
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";

// MATERIAL UI ICON
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// CONTEXT
import { CartContext } from "../Context/CartContext";
import { InTheCart } from "../Context/InTheCart";

// USE ULID LIBRARY //
import { v4 as uuidv4 } from "uuid";
// USE ULID LIBRARY //

// i18n
import { useTranslation } from "react-i18next";

// AXIOS
import axios from "axios";

// REACT ENAILJS
emailjs.init("8RgA6VpJSC_QNKjdu");
import emailjs from "@emailjs/browser";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function CartFull() {
  const { t } = useTranslation();

  // UESCONTEXT //
  const { addToCart, setAddToCart } = React.useContext(InTheCart);
  const { setCartCount } = React.useContext(CartContext);
  // UESCONTEXT //

  // USESTATE //
  const [customerInformation, setCustomerInformation] = React.useState<any>({
    email: null,
    adderss: null,
    firstName: null,
    lastName: null,
    city: null,
  });
  const [open, setOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);
  // USESTATE //

  // GET THE TIME //
  function formatTime(number: number) {
    return number < 10 ? "0" + number : number;
  }

  const showProducts = () => {
    if (addToCart.length === 0) {
      return (
        <Typography marginTop={15} marginBottom={15} fontSize={32}>
          {t("No products in the cart")}
        </Typography>
      );
    } else {
      return addToCart.map((product) => (
        <div key={product.id}>
          {/* ITEMS ADDED TO CART */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                width: "5vh",
                marginRight: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{
                  height: 80,
                  width: 80,
                  marginBottom: "10px",
                }}
                image={product.imageProduct}
                title="Iphone 13 Pro Max"
              />
            </Box>

            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "0.5rem", sm: "1rem", md: "1rem" },
              }}
            >
              {product.nameProduct}
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "0.5rem", sm: "1rem", md: "1rem" },
              }}
            >
              $ {product.price}
            </Typography>
            <Button
              sx={{ width: 10 }}
              onClick={() => {
                handleDeleteItemCart(product.id);
              }}
            >
              <HighlightOffIcon />
            </Button>
          </Box>
          {/* ITEMS ADDED TO CART */}
        </div>
      ));
    }
  };

  let now = new Date();
  let hours = formatTime(now.getHours());
  let minutes = formatTime(now.getMinutes());
  let seconds = formatTime(now.getSeconds());
  let time = ` ${hours}:${minutes}:${seconds}`;
  // GET THE TIME //

  // GET THE DAY //
  let day = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let today = ` ${day}/${month}/${year}`;
  // GET THE DAY //

  // HANDEL SUBMIT ADDRESS //
  function handelSubmitToEmail() {
    const token: string | null = localStorage.getItem("token");
    const totalAmount: number = Total();

    const templateParams = {
      fromName: "Ahhmad",
      time: time,
      day: today,
      email: customerInformation.email,
      address: customerInformation.address,
      firstName: customerInformation.firstName,
      lastName: customerInformation.lastName,
      text: customerInformation.text,
      city: customerInformation.city,
    };

    if (
      !customerInformation.email ||
      !customerInformation.adderss ||
      !customerInformation.firstName ||
      !customerInformation.lastName ||
      !customerInformation.city
    ) {
      return setErrorOpen(true);
    } else {
      emailjs
        .send("service_28iovi5", "template_la84fu9", templateParams)
        .then(() => {})
        .catch((error) => {
          console.log("FAILED...", error);
        });

      const requests = addToCart.map((product) => {
        axios
          .post("https://my-first-website-rgi1.onrender.com/orders", {
            id: uuidv4(),
            userToken: token,
            ProductNameInput: product.nameProduct,
            OrderImageInput: product.imageProduct,
            ShippingMethodInput: "Free",
            PaymentMethodInput: "Cash",
            OrderPriceInput: product.price,
            PriceAfterDiscountInput: "0",
            TotalAmountInput: totalAmount,
          })
          .then(() => {
            setOpen(true);
          })
          .catch((error) => {
            console.log(error);
          });
      });
      Promise.all(requests)
        .then(() => {
          if (addToCart.length === 0) {
            console.log("No products in the cart");
          } else {
            console.log("All requests completed successfully");
            setAddToCart([]); // أعد جلب البيانات بدل reload
          }
        })
        .catch((error) => {
          console.log("An error occurred:", error);
        });
    }
  }
  // HANDEL SUBMIT ADDRESS //

  // DELETE THE NUMBER FOR CART //
  const handleDeleteItemCart = (e: any) => {
    setAddToCart(addToCart.filter((p) => p.id !== e));
    let deleteProduct = addToCart.find((p) => p.id === e);
    if (deleteProduct) {
      setCartCount((prev) => {
        return prev - 1;
      });
    }
  };
  // DELETE THE NUMBER FOR CART //

  function changeHandler(e: any) {
    setCustomerInformation({
      ...customerInformation,
      [e.target.name]: e.target.value,
    });
  }

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

  function Total() {
    const total = addToCart.reduce((acc, product) => acc + product.price, 0);
    return total;
  }
  const VAT = (Total() * 15) / 100 + Total();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography>Shopping Cart</Typography>
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
            <AlertTitle>Order completed</AlertTitle>
            Order completed successfully
          </Alert>
        </Snackbar>
        <Snackbar
          open={errorOpen}
          autoHideDuration={2000}
          onClose={() => setErrorOpen(false)}
          sx={{ position: "fixed", opacity: 0.9 }}
        >
          <Alert
            sx={{ fontSize: 20, background: "#242424ff", color: "#FFFFFF" }}
            severity="error"
            onClose={() => setErrorOpen(false)}
          >
            <AlertTitle>{t("Error with information")}</AlertTitle>
            {t("Please fill in all the fields")}
          </Alert>
        </Snackbar>
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Grid container spacing={2} justifyContent={"space-around"}>
            {/* ADDRESS DETAILS */}
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 8 }}>
              <Stack spacing={2}>
                <Item
                  sx={{
                    height: "90%",
                    boxSizing: "border-box",
                    paddingBottom: "10vh",
                    background:
                      "linear-gradient(178deg,rgba(54, 54, 54, 0.5) 0%, rgba(38, 166, 154, 0.6) 100%)",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
                  }}
                >
                  <Typography sx={{ color: "#FFFFFF" }}>
                    {t("Email")}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    onChange={changeHandler}
                    sx={{
                      width: "100%",
                      marginBottom: "5vh",
                      input: { color: "#FFFFFF" },
                    }}
                  />
                  <Typography sx={{ color: "#FFFFFF" }}>
                    {t("Adderss")}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="adderss"
                    variant="filled"
                    name="adderss"
                    onChange={changeHandler}
                    sx={{
                      width: "100%",
                      marginBottom: "5vh",
                      input: { color: "#FFFFFF" },
                    }}
                  />
                  <Typography sx={{ color: "#FFFFFF" }}>
                    {t("First name")}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="First name"
                    variant="filled"
                    name="firstName"
                    onChange={changeHandler}
                    sx={{
                      width: "100%",
                      marginBottom: "5vh",
                      input: { color: "#FFFFFF" },
                    }}
                  />
                  <Typography sx={{ color: "#FFFFFF" }}>
                    {t("Last name")}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Last name"
                    variant="filled"
                    name="lastName"
                    onChange={changeHandler}
                    sx={{
                      width: "100%",
                      marginBottom: "5vh",
                      input: { color: "#FFFFFF" },
                    }}
                  />
                  <Typography sx={{ color: "#FFFFFF" }}>{t("City")}</Typography>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="filled"
                    name="city"
                    onChange={changeHandler}
                    sx={{
                      width: "100%",
                      marginBottom: "5vh",
                      input: { color: "#FFFFFF" },
                    }}
                  />
                </Item>
              </Stack>
            </Grid>
            {/* ADDRESS DETAILS */}

            {/* PURCHASE DETAILS */}
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
              <Item
                sx={{
                  height: "100%",
                  boxSizing: "border-box",
                  fontSize: "24px",
                  background:
                    "linear-gradient(178deg,rgba(54, 54, 54, 0.5) 0%, rgba(38, 166, 154, 0.6) 100%)",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
                  color: "#FFFFFF",
                }}
              >
                {t("Purchase details")}
                <Box
                  style={{
                    overflowY: "scroll",
                    maxHeight: "50vh",
                    scrollbarWidth: "none",
                  }}
                >
                  {showProducts()}
                </Box>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                <Typography sx={{ color: "#FFFFFF" }}>
                  {t("Total")}: $ {Total()}
                </Typography>
                <Typography sx={{ color: "#FFFFFF" }}>
                  {t("total after Tax:")} {VAT}
                </Typography>
                <Typography sx={{ color: "#FFFFFF" }}>
                  {t("shipping:")} {t("Free")}
                </Typography>
                <Button
                  onClick={() => {
                    handelSubmitToEmail();
                  }}
                  sx={{
                    backgroundColor: "#009688",
                    color: "#FFFFFF",
                    marginTop: "5vh",
                    padding: "10px",
                    width: "100%",
                  }}
                >
                  Proceed to{" "}
                </Button>
              </Item>
            </Grid>
            {/* PURCHASE DETAILS */}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
