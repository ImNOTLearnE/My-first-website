import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// MATERIAL ICON
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// CONTEXT
import { CartContext } from "../Context/CartContext";
import { ProducstContext } from "../Context/ProductContext";
import { InTheCart } from "../Context/InTheCart";

//CSS CLASS
import "../Styles/ResponsiveProductsCategoty.css";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
    ...theme.applyStyles("dark", {
      color: "#bfbfbf",
      opacity: undefined,
    }),
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

export default function ProductsCategory() {
  // UESCONTEXT //
  const { setCartCount } = React.useContext(CartContext);
  const { phonesnewArrival, headphonesNewArrival } =
    React.useContext(ProducstContext);
  const { addToCart, setAddToCart } = React.useContext(InTheCart);
  // UESCONTEXT //

  // USESTATE //
  const [test, setTest] = React.useState<any>(phonesnewArrival);
  const [ratingProdect] = React.useState<number | null>(5);
  const [selectedBrand, setSelectedBrand] = React.useState<string>("All");
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("Phones");
  const [phonesBrands, setPhonesBrand] = React.useState<any>([
    "Samsung",
    "Apple",
    "Huawei",
    "Xiaomi",
    "JBL",
    "Sony",
    "OnePlus",
    "Google",
    "Oppo",
    "Realme",
    "Anker",
    "All",
  ]);
  const [categorys, setCategorys] = React.useState<any>([
    "Phones",
    "Watches",
    "Camera",
    "Headphones",
    "Computers",
    "Gaming",
  ]);
  const [artists, setArtists] = React.useState<any>(phonesnewArrival);
  const [priceFilter, setPriceFilter] = React.useState<any>({
    minValue: 100,
    maxValue: 5000,
  });
  // USESTATE //

  // ADD THE NUMBER FOR CART //
  function handleAdd(productId: Number) {
    const productToAdd = artists.find((product) => product.id === productId);

    if (productToAdd) {
      setCartCount((prev) => {
        return prev + 1;
      });
    }
  }
  // ADD THE NUMBER FOR CART //

  // ADD THE PRODUCT FOR CART //
  function handleAddToCart(productAdd: any) {
    // setAddToCart(() => {
    //   return [
    //     ...addToCart,
    //     {
    //       id: productAdd.id,
    //       nameProduct: productAdd.nameProduct,
    //       price: productAdd.price,
    //       imageProduct: productAdd.imageProduct,
    //     },
    //   ];
    // });

    setAddToCart(() => {
      return [...addToCart, productAdd];
    });
  }
  // ADD THE PRODUCT FOR CART //

  // HERE, THE DISPLAYED PRODUCTS ARE UPDATED BASED ON THE FILTERING SYSTEM //
  type FilterOptions = {
    nameFilter?: string;
    minV?: number;
    maxV?: number;
  };
  function handleFilterProduct({
    nameFilter = selectedBrand,
    minV = 100,
    maxV = 5500,
  }: FilterOptions) {
    setPriceFilter({ minValue: minV, maxValue: maxV });

    let checkTheBrand = () =>
      test.filter(
        (t) =>
          (t.brand === nameFilter && maxV >= t.price && minV <= t.price) ||
          (nameFilter == "All" && maxV >= t.price && minV <= t.price)
      );
    setSelectedBrand(nameFilter);
    setArtists(checkTheBrand);
  }
  // HERE, THE DISPLAYED PRODUCTS ARE UPDATED BASED ON THE FILTERING SYSTEM //

  function handleFilterCategory(category) {
    if (category === "Phones") {
      setTest(phonesnewArrival);
      setArtists(phonesnewArrival);
      setSelectedCategory(category);
    } else if (category === "Headphones") {
      setTest(headphonesNewArrival);
      setArtists(headphonesNewArrival);
      setSelectedCategory(category);
    }
  }

  return (
    <>
      <div className="container-category">
        <div className="filter-product">
          {/* CATEGORY NAME */}
          <Card
            className="my-category"
            sx={{
              backgroundColor: "#363636",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
              borderRadius: "25px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: "#00796B",
                  mb: 1.5,
                  fontSize: 36,
                  textAlign: "center",
                  marginTop: "73px",
                }}
              >
                Category By:
                <br />
                {selectedCategory}
              </Typography>
            </CardContent>
          </Card>
          {/* CATEGORY NAME */}
          {/* FILTER PRODUCT */}
          <Card
            className="my-filter"
            sx={{
              backgroundColor: "#363636",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
            }}
          >
            <CardActions sx={{ display: "block" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "18px", // موبايل
                    sm: "24px", // تابلت
                    md: "32px", // لابتوب
                    lg: "36px", // شاشات كبيرة
                  },
                }}
                marginBottom={2}
                color="#00796B"
              >
                Category:
              </Typography>{" "}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ backgroundColor: "#AFAFAF" }}
                >
                  <Typography component="span">{selectedCategory}</Typography>
                </AccordionSummary>
                {categorys.map((category) => (
                  <AccordionDetails
                    sx={{ backgroundColor: "#AFAFAF" }}
                    key={category}
                  >
                    <Button
                      onClick={() => {
                        handleFilterCategory(category);
                      }}
                      size="small"
                    >
                      {category}
                    </Button>
                  </AccordionDetails>
                ))}
              </Accordion>
              ;
              {/* <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ backgroundColor: "#AFAFAF" }}
                >
                  <Typography component="span">brand</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#AFAFAF" }}>
                  <Button size="small">Price</Button>
                </AccordionDetails>
                <AccordionDetails sx={{ backgroundColor: "#AFAFAF" }}>
                  <Button size="small">test</Button>
                </AccordionDetails>
              </Accordion> */}
            </CardActions>

            {/* FOR TO SET PRICE */}
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography fontSize={20} color="#00796B" marginRight={1}>
                Price
              </Typography>
              <AirbnbSlider
                slots={{ thumb: AirbnbThumbComponent }}
                valueLabelDisplay="auto"
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                value={[priceFilter.minValue, priceFilter.maxValue]}
                min={100}
                max={7000}
                onChange={(e) =>
                  handleFilterProduct({
                    minV: e.target.value[0],
                    maxV: e.target.value[1],
                  })
                }
              />
            </CardActions>
            {/* FOR TO SET PRICE */}

            {/* FOR TO SET BRAND */}
            <CardActions
              sx={{ display: "block", justifyContent: "space-between" }}
            >
              <Typography color="#00796B" fontSize={20} marginBottom={1}>
                Brand
              </Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ backgroundColor: "#AFAFAF" }}
                >
                  <Typography component="span">{selectedBrand}</Typography>
                </AccordionSummary>
                {phonesBrands.map((phoneBrand) => (
                  <AccordionDetails
                    sx={{ backgroundColor: "#AFAFAF" }}
                    key={phoneBrand}
                  >
                    <Button
                      onClick={() => {
                        handleFilterProduct({ nameFilter: phoneBrand });
                      }}
                      size="small"
                    >
                      {phoneBrand}
                    </Button>
                  </AccordionDetails>
                ))}
              </Accordion>
            </CardActions>
            {/* FOR TO SET BRAND */}

            {/* FOR TO SET COLOR */}
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button size="small">
                <Typography color="#00796B">The Color</Typography>
              </Button>
              <KeyboardArrowDownIcon />
            </CardActions>
            {/* FOR TO SET COLOR */}

            {/* FOR TO SET OFFERS */}
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button size="small">
                <Typography color="#00796B">Offers</Typography>
              </Button>
              <KeyboardArrowDownIcon />
            </CardActions>
            {/* FOR TO SET OFFERS */}
          </Card>
          {/* FILTER PRODUCT */}
        </div>

        {/* CARD PRODUCT */}
        <Box className="card-product">
          <Grid
            container
            spacing={{ xs: 2, md: 10 }}
            columns={{ xs: 3, sm: 8, md: 16 }}
          >
            {artists.map((Product) => (
              <Grid
                size={{ xs: 3, sm: 3, md: 3 }}
                key={Product.id}
                className={"item fall"}
                sx={{
                  maxWidth: 345,
                  minWidth: 200,
                  marginLeft: "121px",
                  paddingBottom: "10px",
                  backgroundColor: "#363636ff",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
                  borderRadius: "25px",
                }}
              >
                <CardMedia
                  sx={{
                    height: 150,
                    width: 150,
                    marginLeft: "25px",
                    marginRight: "20px",
                  }}
                  image={Product.imageProduct}
                  title={Product.nameProduct}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                    {Product.nameProduct}
                  </Typography>
                  <Rating name="read-only" value={ratingProdect} readOnly />
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
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CARD PRODUCT */}
      </div>
    </>
  );
}
