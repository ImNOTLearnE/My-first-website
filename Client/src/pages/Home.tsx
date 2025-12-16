import Banner from "../components/Banner";
import Category from "../components/Category";
import ProductGrid from "../components/ProductGrid";

// MUI
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// i18n
import { useTranslation } from "react-i18next";

export default function () {
  // ALERT DIALOG //

  const { t } = useTranslation();

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    localStorage.setItem("seenPopUp", "true");
    setOpen(false);
  };
  {
    React.useEffect(() => {
      // getting value of "seenPopUp" key from localStorage
      let returningUser = localStorage.getItem("seenPopUp");
      // if it's not there, for a new user, it will be null
      // if it's there it will be boolean true
      // setting the opposite to state, false for returning user, true for a new user
      setOpen(!returningUser);
    }, []);
  }
  // ALERT DIALOG //
  const Alert = () => {
    React.useEffect(() => {}, []);

    return (
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{t("ALert")}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {t(
              "The website is under development and not yet complete. It's a fake online store, and even the orders placed are fake; nothing is real. It's just a React project."
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <Alert />
      <div>
        <Banner />
      </div>
      <div>
        <ProductGrid />
      </div>
      <div>
        <Category />
      </div>
    </>
  );
}
