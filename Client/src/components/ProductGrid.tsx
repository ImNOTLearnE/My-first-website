import * as React from "react";
// MATERIAL UI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";

// CSS CLASS
import "../Styles/ResponsiveProductsCategoty.css";

// MATERIAL ICON
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// USE ULID LIBRARY //
import { v4 as uuidv4 } from "uuid";
// USE ULID LIBRARY //

//I18N
import { useTranslation } from "react-i18next";

// CONTEXT
import { CartContext } from "../Context/CartContext";
import { ProducstContext } from "../Context/ProductContext";
import { InTheCart } from "../Context/InTheCart";

const ProductsComponent = React.memo(
  ({ Product, ratingProdect, handleAddToCart, handleAdd, itemFall }: any) => {
    const handleClick = React.useCallback(() => {
      handleAddToCart(Product);
      handleAdd(Product.id);
    }, [Product, handleAddToCart, handleAdd, itemFall]);

    return (
      <Card
        className={itemFall}
        sx={{
          width: { xs: "27vw", md: "20vw", lg: "13vw" },
          overflow: "visible",
          borderRadius: "25px",
          backgroundColor: "#363636ff",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
          "&:hover": {
            boxShadow:
              "5px 5px 20px 0px rgba(54, 54, 54, 0.7), 1px 3px 10px 5px rgba(0, 0, 0, 0.100)",
            color: "#FFFFFF",
          },
        }}
      >
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <CardMedia
            sx={{
              height: { xs: "22vw", md: "18vw", lg: "8vw" },
              width: { xs: "22vw", md: "18vw", lg: "7vw" },
              backgroundImage: "cover",
            }}
            image={Product.imageProduct}
            title={Product.nameProduct}
          />
        </Box>

        <CardContent sx={{ marginLeft: 0 }}>
          <Box sx={{ width: "115%" }}>
            <Typography
              variant="body2"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "0.4rem", sm: "1rem", md: "1rem" },
              }}
            >
              {Product.nameProduct}
            </Typography>
          </Box>

          <Rating
            sx={{ fontSize: { xs: "0.5rem", sm: "1rem", md: "1rem" } }}
            name="read-only"
            value={ratingProdect}
            readOnly
          />
          <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
            $ {Product.price}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleClick}
            sx={{
              backgroundColor: "#26A69A",
              borderRadius: "25px",
              width: "100%",
            }}
          >
            <AddShoppingCartIcon
              style={{
                padding: "5px",
                fontSize: "30px",
                color: "black",
                width: "100%",
              }}
            />
          </Button>
        </CardActions>
      </Card>
    );
  },
);

export default function ProductGrid() {
  // USESTATE //
  const [value, setValue] = React.useState(0);
  const [ratingProdect] = React.useState<number | null>(5);
  const [open, setOpen] = React.useState(false);
  // USESTATE //

  // UESCONTEXT //
  const { setCartCount } = React.useContext(CartContext);
  const { phonesnewArrival, phonesBestSaller } =
    React.useContext(ProducstContext);
  const { setAddToCart } = React.useContext(InTheCart);
  // UESCONTEXT //

  const { t } = useTranslation();

  // TABS COMPONENT CHANGE //
  let Products = phonesnewArrival;
  let itemFall = "item fall";
  if (value === 0) {
    Products = phonesnewArrival;
  } else if (value === 1) {
    Products = phonesBestSaller;
  } else if (value === 2) {
    let productJustBrand = Products.filter(
      (product) => product.isBrand == true,
    );
    Products = productJustBrand;
  }
  // TABS COMPONENT CHANGE //

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // ADD THE PRODUCT FOR CART //
  const handleAddToCart = React.useCallback(
    (productAdded: any) => {
      setOpen(true);
      setAddToCart((prev: any) => [
        ...prev,
        {
          id: uuidv4(),
          nameProduct: productAdded.nameProduct,
          price: productAdded.price,
          imageProduct: productAdded.imageProduct,
        },
      ]);
    },
    [setAddToCart],
  );

  // ADD THE PRODUCT FOR CART //

  // ADD THE NUMBER FOR CART //

  const handleAdd = React.useCallback(
    (productId: Number) => {
      const productToAdd = Products.find((product) => product.id === productId);

      if (productToAdd) {
        setCartCount((prev) => {
          return prev + 1;
        });
      }
    },
    [setCartCount],
  );
  // ADD THE NUMBER FOR CART //

  // let randomNum = Math.floor(Math.random(Products));

  // const slicedArray = Products.sort(() => 0.5 - Math.random())[3];
  // const slicedArray = Products.sort(() => 10);

  // console.log(slicedArray);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* TABS COMPONENT */}
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="New Arrival"
            sx={{
              color: "#00796B",
            }}
          />
          <Tab
            label="Best Saller"
            sx={{
              color: "#00796B",
            }}
          />
          <Tab
            label="Brand"
            sx={{
              color: "#00796B",
            }}
          />
        </Tabs>
        {/* TABS COMPONENT */}

        {/* CARD PRODECT SECTION */}
        <Box
          sx={{
            display: "flex",
            marginTop: "60px",
            maxWidth: { xs: "100vw", md: "80vw", lg: "50vw" },
            height: "auto",
          }}
        >
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
              <AlertTitle>{t("Product added")}</AlertTitle>
              {t("Product added to cart successfully!")}
            </Alert>
          </Snackbar>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            className="swiper-slide"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {Products.slice(0, 3).map((Product) => (
              <SwiperSlide key={Product.id}>
                <ProductsComponent
                  Product={Product}
                  ratingProdect={ratingProdect}
                  handleAddToCart={handleAddToCart}
                  handleAdd={handleAdd}
                  itemFall={itemFall}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {/* CARD PRODECT SECTION */}
      </div>
    </>
  );
}
