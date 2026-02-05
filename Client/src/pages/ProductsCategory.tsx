import * as React from "react";
import { useCallback } from "react";
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

// i18n
import { useTranslation } from "react-i18next";

// USE ULID LIBRARY //
import { v4 as uuidv4 } from "uuid";
// USE ULID LIBRARY //

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

const phonesBrands = [
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
];

const categorys = ["Phones", "Watches", "Cameras", "Headphones", "laptops"];

const Products = React.memo(
  ({ product, onAddToCart, handleAddNumber, ratingProdect }: any) => {
    const handleClick = useCallback(() => {
      onAddToCart(product);
    }, [product, onAddToCart]);

    return (
      <Grid
        key={product.id}
        size={{ xs: 2.5, sm: 2.5, md: 2 }}
        className={"item fall"}
        sx={{
          backgroundColor: "#363636ff",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.28), 0 6px 20px 0 rgba(0, 0, 0, 0.77)",
          borderRadius: "25px",
        }}
      >
        <Box>
          <CardMedia
            sx={{
              height: { xs: "20vw", sm: "15vw", md: "10vw" },
              width: { xs: "20vw", sm: "15vw", md: "10vw" },
              margin: "auto",
            }}
            image={product.imageProduct}
            title={product.nameProduct}
          />
        </Box>

        <Box>
          <CardContent>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "3vw", md: "1vw" }, color: "#FFFFFF" }}
            >
              {product.nameProduct}
            </Typography>
            <Rating
              name="read-only"
              value={ratingProdect}
              sx={{ fontSize: { xs: "3vw", md: "1vw" } }}
              readOnly
            />
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "3vw", md: "1vw" }, color: "#FFFFFF" }}
            >
              $ {product.price}
            </Typography>
          </CardContent>
        </Box>

        <Box>
          <CardActions>
            <Button
              onClick={() => {
                handleClick();
                handleAddNumber(product.id);
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
        </Box>
      </Grid>
    );
  },
);

const MemoizedCategoryName = React.memo(({ selectedCategory, t }: any) => {
  return (
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
            marginTop: "5vh",
          }}
        >
          {t("Category By:")}
          <br />
          {selectedCategory}
        </Typography>
      </CardContent>
    </Card>
  );
});

const FilterSection = React.memo(
  ({
    handleFilterCategory,
    handleFilterProduct,
    selectedCategory,
    selectedBrand,
    priceFilter,
  }: any) => {
    const { t } = useTranslation();

    return (
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
                lg: "34px", // شاشات كبيرة
              },
            }}
            marginBottom={2}
            color="#00796B"
          >
            {t("Category")}
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
        </CardActions>

        {/* FOR TO SET PRICE */}
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize={20} color="#00796B" marginRight={1}>
            {t("Price")}
          </Typography>
          <AirbnbSlider
            slots={{ thumb: AirbnbThumbComponent }}
            valueLabelDisplay="auto"
            getAriaLabel={(index) =>
              index === 0 ? "Minimum price" : "Maximum price"
            }
            value={[priceFilter.minValue, priceFilter.maxValue]}
            min={100}
            max={20000}
            onChange={(newValue: any) => {
              console.log(newValue.target.value[1]);
              handleFilterProduct({
                minV: newValue.target.value[0],
                maxV: newValue.target.value[1],
              });
            }}
          />
        </CardActions>
        {/* FOR TO SET PRICE */}

        {/* FOR TO SET BRAND */}
        <CardActions sx={{ display: "block", justifyContent: "space-between" }}>
          <Typography color="#00796B" fontSize={20} marginBottom={1}>
            {t("Brand")}
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
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small">
            <Typography color="#00796B">The Color</Typography>
          </Button>
          <KeyboardArrowDownIcon />
        </CardActions>
        {/* FOR TO SET COLOR */}

        {/* FOR TO SET OFFERS */}
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small">
            <Typography color="#00796B">Offers</Typography>
          </Button>
          <KeyboardArrowDownIcon />
        </CardActions>
        {/* FOR TO SET OFFERS */}
      </Card>
    );
  },
);

export default function ProductsCategory() {
  // UESCONTEXT //
  const { setCartCount } = React.useContext(CartContext);
  const {
    phonesnewArrival,
    headphonesNewArrival,
    watchesNewArrival,
    camerasNewArrival,
    laptopsNewArrival,
  } = React.useContext(ProducstContext);
  const { setAddToCart, addToCart } = React.useContext(InTheCart);
  // UESCONTEXT //

  // USESTATE //
  const [selectedBrand, setSelectedBrand] = React.useState<string>("All");
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("Phones");
  const [ratingProdect] = React.useState<number | null>(5);

  const [test, setTest] = React.useState<any>(phonesnewArrival);

  const [artists, setArtists] = React.useState<any>(phonesnewArrival);
  const [priceFilter, setPriceFilter] = React.useState<any>({
    minValue: 100,
    maxValue: 15000,
  });
  // USESTATE //

  const { t } = useTranslation();

  // ADD THE NUMBER FOR CART //
  const handleAdd = useCallback(
    (productId: Number) => {
      const productToAdd = artists.find(
        (product: any) => product.id === productId,
      );

      if (productToAdd) {
        setCartCount((prev) => {
          return prev + 1;
        });
      }
    },
    [artists, setCartCount],
  );
  // ADD THE NUMBER FOR CART //

  // ADD THE PRODUCT FOR CART //
  // const handleAddToCart = useCallback(
  //   (productAdd: any) => {
  //     setAddToCart((prev: any) => [...prev, productAdd]);
  //   },
  //   [setAddToCart] // هنا نحدد الـ dependencies
  // );

  function handleAddToCart(productAdd: any) {
    setAddToCart(() => {
      return [
        ...addToCart,
        {
          id: uuidv4(),
          nameProduct: productAdd.nameProduct,
          price: productAdd.price,
          imageProduct: productAdd.imageProduct,
        },
      ];
    });
  }
  // ADD THE PRODUCT FOR CART //

  // HERE, THE DISPLAYED PRODUCTS ARE UPDATED BASED ON THE FILTERING SYSTEM //
  type FilterOptions = {
    nameFilter?: string;
    minV?: number;
    maxV?: number;
  };
  // function handleFilterProduct({
  //   nameFilter = selectedBrand,
  //   minV = 100,
  //   maxV = 5500,
  // }: FilterOptions) {
  //   setPriceFilter({ minValue: minV, maxValue: maxV });

  //   let checkTheBrand = () =>
  //     test.filter(
  //       (t) =>
  //         (t.brand === nameFilter && maxV >= t.price && minV <= t.price) ||
  //         (nameFilter == "All" && maxV >= t.price && minV <= t.price)
  //     );
  //   setSelectedBrand(nameFilter);
  //   setArtists(checkTheBrand);
  // }

  const handleFilterProduct = useCallback(
    ({
      nameFilter = selectedBrand,
      minV = 100,
      maxV = 5500,
    }: FilterOptions) => {
      setPriceFilter({ minValue: minV, maxValue: maxV });
      console.log(minV);

      let checkTheBrand = () =>
        test.filter(
          (t: any) =>
            (t.brand === nameFilter && maxV >= t.price && minV <= t.price) ||
            (nameFilter == "All" && maxV >= t.price && minV <= t.price),
        );
      setSelectedBrand(nameFilter);
      setArtists(checkTheBrand);
    },
    [selectedBrand, test],
  );

  // HERE, THE DISPLAYED PRODUCTS ARE UPDATED BASED ON THE FILTERING SYSTEM //

  const handleFilterCategory = useCallback(
    (category: any) => {
      if (category === "Phones") {
        setTest(phonesnewArrival);
        setArtists(phonesnewArrival);
        setSelectedCategory(category);
      } else if (category === "Headphones") {
        setTest(headphonesNewArrival);
        setArtists(headphonesNewArrival);
        setSelectedCategory(category);
      } else if (category === "Watches") {
        setTest(watchesNewArrival);
        setArtists(watchesNewArrival);
        setSelectedCategory(category);
      } else if (category === "Cameras") {
        setTest(camerasNewArrival);
        setArtists(camerasNewArrival);
        setSelectedCategory(category);
      } else if (category === "laptops") {
        setTest(laptopsNewArrival);
        setArtists(laptopsNewArrival);
        setSelectedCategory(category);
      }
    },
    [headphonesNewArrival, phonesnewArrival],
  );
  return (
    <>
      <div className="container-category">
        <div className="filter-product">
          {/* CATEGORY NAME */}
          <MemoizedCategoryName selectedCategory={selectedCategory} t={t} />
          {/* CATEGORY NAME */}

          {/* FILTER PRODUCT */}
          <FilterSection
            handleFilterCategory={handleFilterCategory}
            handleFilterProduct={handleFilterProduct}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            priceFilter={priceFilter}
            minValue={priceFilter.minValue}
            maxValue={priceFilter.maxValue}
          />

          {/* FILTER PRODUCT */}
        </div>

        {/* CARD PRODUCT */}
        <Box className="card-product">
          <Grid
            container
            spacing={{ xs: 5, md: 10 }}
            columns={{ xs: 5, sm: 8, md: 8 }}
          >
            {artists.map((Product: any) => (
              <Products
                key={Product.id}
                product={Product}
                onAddToCart={handleAddToCart}
                handleAddNumber={handleAdd}
                ratingProdect={ratingProdect}
              />
            ))}
          </Grid>
        </Box>
        {/* CARD PRODUCT */}
      </div>
    </>
  );
}
