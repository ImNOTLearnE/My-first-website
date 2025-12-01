import * as React from "react";
import { lazy } from "react";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// MATERIAL ICON
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// CONTEXT
import { CartContext } from "../Context/CartContext";
import { ProducstContext } from "../Context/ProductContext";
import { InTheCart } from "../Context/InTheCart";

export default function Products() {
  // UESCONTEXT //
  const { setCartCount } = React.useContext(CartContext);
  const { phonesnewArrival, headphonesNewArrival } =
    React.useContext(ProducstContext);
  const { addToCart, setAddToCart } = React.useContext(InTheCart);
  // UESCONTEXT //

  // USESTATE //
  const [ratingProdect] = React.useState<number | null>(5);
  const [artists, setArtists] = React.useState<any>(phonesnewArrival);
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

  return (
    <>
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
    </>
  );
}
