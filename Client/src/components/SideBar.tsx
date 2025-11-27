// REACT
import * as React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// MATERIAL ICON
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// REACT ROUTER
import { Link, useLocation } from "react-router";

// CSS
import "../Styles/ResponsiveSideBar.css";

export default function SideBar() {
  const location = useLocation();

  console.log(location);

  const [iconButtons] = React.useState([
    {
      id: "profile",
      to: "/Profile",
      defaultColor: "#000000ff",
      icon: <AccountCircleOutlinedIcon sx={{ width: 70, height: 70 }} />,
    },
    {
      id: "orders",
      to: "/Profile/Orders",
      defaultColor: "#000000ff",
      icon: <Inventory2TwoToneIcon sx={{ width: 70, height: 70 }} />,
    },
    {
      id: "favorites",
      to: null,
      defaultColor: "#000000ff",

      icon: <FavoriteTwoToneIcon sx={{ width: 70, height: 70 }} />,
    },
    {
      id: "payments",
      to: null,
      defaultColor: "#000000ff",
      icon: <CreditCardTwoToneIcon sx={{ width: 70, height: 70 }} />,
    },
    {
      id: "addresses",
      to: null,
      defaultColor: "#000000ff",
      icon: <LocationOnTwoToneIcon sx={{ width: 70, height: 70 }} />,
    },
  ]);

  return (
    <>
      <Grid className="row">
        <Grid className="test">
          {iconButtons.map((item) => (
            <Grid key={item.id}>
              <Link to={item.to}>
                <Button
                  onClick={() => {}}
                  sx={{
                    color:
                      location.pathname === item.to ? "#26A69A" : "#000000ff",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  {item.icon}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
