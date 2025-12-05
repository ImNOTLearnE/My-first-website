// Material UI
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// i18n
import { useTranslation } from "react-i18next";

// Material UI ICON
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AdbIcon from "@mui/icons-material/Adb";
import LanguageIcon from "@mui/icons-material/Language";

// REACT ROUTER
import { Link, useNavigate } from "react-router-dom";

const ProfileIcon = React.memo(({ handleOpenUserMenu, btnShows }: any) => {
  return (
    <Tooltip title="Open settings">
      <IconButton
        onClick={handleOpenUserMenu}
        sx={{ p: 0, display: btnShows.profile }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
  );
});

const LanguageBtn = React.memo(
  ({ open, handleClick, anchorEl, handleClose, handleChangeLanguage }: any) => {
    const { t } = useTranslation();
    return (
      <>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: "#000000ff" }}
        >
          <LanguageIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => {
            handleClose();
          }}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
          <MenuItem
            onClick={(e) => {
              handleClose();
              handleChangeLanguage(e.currentTarget.innerText);
            }}
          >
            {t("العربية")}
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              handleClose();
              handleChangeLanguage(e.currentTarget.innerText);
            }}
          >
            {t("الانجليزية")}
          </MenuItem>
        </Menu>
      </>
    );
  }
);

const HeaderCart = React.memo(({ itemCart }: any) => {
  return (
    <IconButton>
      <Link to="/Cart" style={{ color: "black" }}>
        <div
          style={{
            padding: "15px",
            borderRadius: "30px",
            position: "absolute",
            marginLeft: "5px",
          }}
        >
          {itemCart}
        </div>
        <AddShoppingCartIcon />
      </Link>
    </IconButton>
  );
});

// const HeaderButtons = React.memo(({ handleCloseNavMenu, page }: any) => {
//   <Link
//     to={page.path}
//     key={page.id}
//     style={{ display: "flex", textDecoration: "none" }}
//   >
//     <Button
//       onClick={() => {
//         handleCloseNavMenu();
//       }}
//       sx={{
//         my: 2,
//         color: "#FFFFFF",
//         display: "block",
//       }}
//     >
//       {page.pagee}
//     </Button>
//   </Link>;
// });

export default function Header({ itemCart }: { itemCart: number }) {
  const { t, i18n } = useTranslation();
  const pages = [
    { id: 1, pagee: t("الصفحة الرئيسية"), path: "/" },
    { id: 2, pagee: t("المنتجات"), path: "/ProductsCategory" },
  ];

  const navigate = useNavigate();
  // i18n.changeLanguage();

  const handleLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/");
      navigate(0);
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [btnShows, setBtnShows] = React.useState({
    loginBtn: '"inline-flex"',
    profile: "none",
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [anchorEl]
  );
  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, [anchorEl]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    },
    [anchorElNav]
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChangeLanguage = React.useCallback(
    (e: string) => {
      if (e === "العربية" || e === "Arabic") {
        console.log(i18n);
        i18n.changeLanguage("ar");
      } else i18n.changeLanguage("en");
    },
    [i18n]
  );

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("token is here");
      setBtnShows({ loginBtn: "none", profile: "inline-flex" });
    } else {
      console.log("token is not here");
      return setBtnShows({ loginBtn: "inline-flex", profile: "none" });
    }
  }, []);

  const settings = [
    { id: 1, page: t("الملف الشخصي"), path: "/Profile" },
    { id: 4, page: t("تسجيل خروج"), path: "/", onclick: handleLogout },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#00897B" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*   WEBSITE LOGOٍ IF CLICKED ON IT WILL TKAE TO HOME PAGE  */}
          <Link
            to="/"
            style={{
              color: "#FFFFFF",
              display: "flex",
              textDecoration: "none",
            }}
          >
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Kstore
            </Typography>
          </Link>
          {/*   WEBSITE LOGOٍ IF CLICKED ON IT WILL TKAE TO HOME PAGE  */}

          {/* BUTTON SHOWS LINKS TO SITE SECTION SUCH AS HOME, PRODUCTS, AND BRANDS FOR MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={page.path}
                  key={page.id}
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    color: "#00897B",
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {page.pagee}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              <div style={{ textAlign: "center" }}>
                <LanguageBtn
                  open={open}
                  handleClick={handleClick}
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  handleChangeLanguage={handleChangeLanguage}
                />
              </div>
            </Menu>
          </Box>
          {/* BUTTON SHOWS LINKS TO SITE SECTION SUCH AS HOME, PRODUCTS, AND BRANDS FOR MOBILE */}

          {/*   WEBSITE LOGOٍ IF CLICKED ON IT WILL TKAE TO HOME PAGE FOR MOBILE  */}
          <Link
            to="/"
            style={{
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Kstore
            </Typography>
          </Link>
          {/*   WEBSITE LOGOٍ IF CLICKED ON IT WILL TKAE TO HOME PAGE FOR MOBILE  */}

          {/*  MAIN NAVIGATION BAR - CONTAINS LINKS TO SITE SECTIONS SUCH AS HOME, PRODUCTS, AND BRANDS  */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                to={page.path}
                key={page.id}
                style={{ display: "flex", textDecoration: "none" }}
              >
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    color: "#FFFFFF",
                    display: "block",
                  }}
                >
                  {page.pagee}
                </Button>
              </Link>
            ))}
          </Box>
          {/*  MAIN NAVIGATION BAR - CONTAINS LINKS TO SITE SECTIONS SUCH AS HOME, PRODUCTS, AND BRANDS  */}

          <Box sx={{ flexGrow: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* THIS COMPONENT FOR SHOW ICON CART */}
              <HeaderCart itemCart={itemCart} />
              {/* THIS COMPONENT FOR SHOW ICON CART */}

              {/*    */}
              <Typography
                sx={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  fontSize: "32px",
                }}
              >
                |
              </Typography>
              {/*    */}

              {/* BUTTON REGISTER */}
              <Link to="/Login">
                <Button
                  sx={{
                    display: btnShows.loginBtn,
                    backgroundColor: "#FFFFFF",
                    color: "#000000",
                    width: "10vw",
                    fontSize: { xs: "8px", md: "14px" },
                  }}
                >
                  REGISTER & LOGIN
                </Button>
              </Link>
              {/* BUTTON REGISTER */}

              {/* THIS IF USER MAKE LOGIN */}

              <ProfileIcon
                handleOpenUserMenu={handleOpenUserMenu}
                btnShows={btnShows}
              />
              {/* THIS IF USER MAKE LOGIN */}

              {/* LANGUAGE BUTTON AND MENU */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <LanguageBtn
                  open={open}
                  handleClick={handleClick}
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  handleChangeLanguage={handleChangeLanguage}
                />
              </Box>

              {/* LANGUAGE BUTTON AND MENU */}
            </div>

            {/* THIS IF USER MAKE LOGIN */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link
                  to="/Profile"
                  key={setting.id}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                    <Button
                      sx={{ textAlign: "center", color: "#000000" }}
                      onClick={setting.onclick}
                    >
                      {setting.page}
                    </Button>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            {/* THIS IF USER MAKE LOGIN */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
