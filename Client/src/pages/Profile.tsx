// REACT
import * as React from "react";

import Grid from "@mui/material/Grid";

// AXIOS
import axios from "axios";

// CSS
import "../Styles/ResponsiveSideBar.css";

// COMPONENTS
import PersonalInfo from "../components/PersonalInfo";
import ContactInfo from "../components/ContactInfo";
import SideBar from "../components/SideBar";

export default function Profile() {
  const [userPersonalInformationInput, setUserPersonalInformationInput] =
    React.useState({
      email: "",
      phoneNumber: "s",
      firstName: "",
      lastName: "",
      city: "",
      nationality: "",
      gender: "male",
      birthday: "",
    });

  React.useEffect(() => {
    axios
      .post("http://localhost:3000/usersInformation", {
        userToken: localStorage.getItem("token"),
      })
      .then(async (response) => {
        setUserPersonalInformationInput({
          ...userPersonalInformationInput,
          email: response.data[0].email,
          firstName: response.data[0].firstname,
          lastName: response.data[0].lastname,
          phoneNumber: response.data[0].phonenumber,
          city: response.data[0].city,
          nationality: response.data[0].nationality,
          gender: response.data[0].gender,
          birthday: response.data[0].birthday,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Grid container spacing={10} className={"container"}>
        {/*  SIDE APP BAR  */}
        <SideBar />
        {/*  SIDE APP BAR  */}

        {/*  CONTACT INFORMATION  */}
        <Grid>
          <ContactInfo
            userPersonalInformationInput={userPersonalInformationInput}
            setUserPersonalInformationInput={setUserPersonalInformationInput}
          />
        </Grid>

        {/*  CONTACT INFORMATION  */}

        {/*  PERSONAL INFORMATION  */}
        <Grid>
          <PersonalInfo
            userPersonalInformationInput={userPersonalInformationInput}
            setUserPersonalInformationInput={setUserPersonalInformationInput}
          />
        </Grid>
        {/*  PERSONAL INFORMATION  */}
      </Grid>
    </>
  );
}
