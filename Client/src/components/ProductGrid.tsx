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

// CSS CLASS
import "../Styles/ResponsiveProductsCategoty.css";

// MATERIAL ICON
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles

// CONTEXT
import { CartContext } from "../Context/CartContext";
import { ProducstContext } from "../Context/ProductContext";
import { InTheCart } from "../Context/InTheCart";

export default function ProductGrid() {
  // USESTATE //
  const [value, setValue] = React.useState(0);
  const [ratingProdect] = React.useState<number | null>(5);
  // USESTATE //

  // UESCONTEXT //
  const { setCartCount } = React.useContext(CartContext);
  const { phonesnewArrival, phonesBestSaller } =
    React.useContext(ProducstContext);
  const { addToCart, setAddToCart } = React.useContext(InTheCart);
  // UESCONTEXT //

  // TABS COMPONENT CHANGE //
  let Products = phonesnewArrival;
  let itemFall = "item fall";
  if (value === 0) {
    Products = phonesnewArrival;
  } else if (value === 1) {
    Products = phonesBestSaller;
  } else if (value === 2) {
    let productJustBrand = Products.filter(
      (product) => product.isBrand == true
    );
    Products = productJustBrand;
  }
  // TABS COMPONENT CHANGE //

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // ADD THE PRODUCT FOR CART //
  function handleAddToCart(productAdd: any) {
    setAddToCart(() => {
      return [
        ...addToCart,
        {
          id: productAdd.id,
          nameProduct: productAdd.nameProduct,
          price: productAdd.price,
          imageProduct: productAdd.imageProduct,
        },
      ];
    });
  }
  // ADD THE PRODUCT FOR CART //

  // ADD THE NUMBER FOR CART //
  function handleAdd(productId: Number) {
    const productToAdd = Products.find((product) => product.id === productId);

    if (productToAdd) {
      setCartCount((prev) => {
        return prev + 1;
      });
    }
  }
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
        <div
          style={{
            display: "flex",
            marginTop: "60px",
            maxWidth: "50vw",
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            className="swiper-slide"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {Products.map((Product) => (
              <SwiperSlide style={{}}>
                <Card
                  className={itemFall}
                  key={Product.id}
                  sx={{
                    maxWidth: "11vw",
                    minWidth: "11vw",
                    overflow: "visible",
                    borderRadius: "25px",
                    backgroundColor: "#363636ff",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardMedia
                      sx={{
                        height: 150,
                        width: 150,
                        backgroundImage: "contain",
                      }}
                      image={Product.imageProduct}
                      title={Product.nameProduct}
                    />
                  </div>

                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontSize: {
                          xs: "0.6rem", // موبايل
                          sm: "0.8rem", // تابلت
                          md: "1rem", // ديسكتوب
                        },
                      }}
                    >
                      {Product.nameProduct}
                    </Typography>
                    <Rating
                      sx={{
                        fontSize: {
                          xs: "0.6rem", // موبايل
                          sm: "0.8rem", // تابلت
                          md: "1rem", // ديسكتوب
                        },
                      }}
                      name="read-only"
                      value={ratingProdect}
                      readOnly
                    />
                    <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                      $ {Product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        handleAddToCart(Product);
                        handleAdd(Product.id);
                      }}
                      style={{
                        backgroundColor: "#26A69A",
                        borderRadius: "25px",
                        width: "100%",
                      }}
                    >
                      <AddShoppingCartIcon
                        style={{
                          padding: "5px",
                          fontSize: "30",
                          color: "black",
                          width: "100%",
                        }}
                      />
                    </Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* CARD PRODECT SECTION */}
      </div>
    </>
  );
}
