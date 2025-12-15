import * as React from "react";
// MATERIAL UI
import CheckIcon from "@mui/icons-material/Check";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// USE ULID LIBRARY //
import { v4 as uuidv4 } from "uuid";
// USE ULID LIBRARY //

// AXIOS
import axios from "axios";

// CSS
import "../Styles/ResponsiveOrders.css";

// i18n
import { useTranslation } from "react-i18next";

export default function ThereAreRequests() {
  const token: string | null = localStorage.getItem("token");
  const { t } = useTranslation();

  //  USESTATE  //
  const [customerRequests, setCustomerRequests] = React.useState<any>([
    {
      id: uuidv4(),
      userToken: token,
      productNameState: null,
      orderImageState: null,
      shippingMethodState: null,
      paymentMethodState: null,
      orderPriceState: null,
      priceAfterDiscountState: null,
      totalAmountState: null,
    },
  ]);

  //  USESTATE  //

  React.useEffect(() => {
    axios
      .post("http://localhost:3000/customerOrders", { userToken: token })
      .then((response) => {
        setCustomerRequests(
          response.data.map((order: any) => {
            return {
              id: uuidv4(),
              productNameState: order.productname,
              orderImageState: order.orderimage,
              shippingMethodState: order.shippingmethod,
              paymentMethodState: order.paymentmethod,
              orderPriceState: order.orderprice,
              priceAfterDiscountState: order.priceafterdiscount,
              totalAmountState: order.orderprice,
            };
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [customerRequests]);

  return (
    <>
      <div className="container-all">
        <div className="container-order ">
          <div className="orders">
            {customerRequests.map((order: any) => (
              <div className="order">
                <div className="order-background">
                  <div>
                    <Typography
                      fontSize={32}
                      marginRight={"3vh"}
                      sx={{
                        display: "inline-flex",
                      }}
                    >
                      تم التوصيل في 22/5/2025
                      <CheckIcon
                        sx={{
                          width: 50,
                          height: 50,
                          background: "rgba(29, 255, 29, 0.30)",
                          border: "5px solid black",
                          borderRadius: 4,
                          marginLeft: 2,
                        }}
                      />
                    </Typography>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      justifyContent: "space-around",

                      alignItems: "center",
                      height: "20vh",
                      maxWidth: "100%",
                    }}
                    className="product-card"
                  >
                    {/* PRODUCT */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* IMAGE */}
                      <div>
                        <CardMedia
                          sx={{
                            height: {
                              xs: "20vw", // للشاشات الصغيرة
                              sm: "20vw", // للشاشات الأكبر
                              md: "130px",
                            },
                            width: {
                              xs: "20vw", // للشاشات الصغيرة
                              sm: "20vw", // للشاشات الأكبر
                              md: "130px",
                            },
                            marginTop: "25px",
                            marginLeft: "25px",
                          }}
                          image={order.orderImageState}
                          title={order.productNameState}
                        />
                      </div>
                      {/* IMAGE */}

                      {/* D */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "18px", // موبايل
                              sm: "24px", // تابلت
                              md: "32px", // لابتوب
                              lg: "36px", // شاشات كبيرة
                            },
                          }}
                          className="productTitle"
                        >
                          {order.productNameState}
                        </Typography>
                        {/*  */}
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "14px", // موبايل
                              sm: "18px", // تابلت
                              md: "20px", // لابتوب
                              lg: "24px", // شاشات كبيرة
                            },
                            textAlign: "right",
                          }}
                          className="productDescription"
                        >
                          عصارة فواكه، 800 واط، سرعتين، 2 لتر، أسود / فضي من
                          اكسترا اليوم! توصيل منزلي مجاني على المشتريات المحددة
                          أو استلامها من المعرض.
                        </Typography>
                      </div>
                      {/* D */}

                      {/*  */}
                    </div>
                    {/* PRODUCT */}

                    {/* DETAILS */}
                    <div className="orderDetails">
                      <div>
                        <Typography
                          className="text-center"
                          fontSize={32}
                          style={{
                            marginBottom: "2vh",
                          }}
                        >
                          {t("Order details")}
                        </Typography>
                        {/*  */}
                        <div className="my-flex-box">
                          {/*  */}
                          <div>
                            {" "}
                            <Typography fontSize={20} marginBottom={"14px"}>
                              {t("Product price")}
                            </Typography>
                            <Typography fontSize={20} marginBottom={"14px"}>
                              {t("shipping")}
                            </Typography>
                            <Typography fontSize={20} marginBottom={"14px"}>
                              {t("opponent")}
                            </Typography>
                            <Typography fontSize={20} marginBottom={"14px"}>
                              {t("payment method")}
                            </Typography>
                            <Typography fontSize={20} marginTop={"33px"}>
                              {t("the total")}
                            </Typography>
                          </div>
                          {/*  */}

                          {/*  */}
                          <div>
                            {" "}
                            <Typography fontSize={20} marginBottom={"14px"}>
                              {order.orderPriceState} {t("SAR")}
                            </Typography>
                            <Typography fontSize={20} marginBottom={"14px"}>
                              {order.shippingMethodState}
                            </Typography>
                            <Typography fontSize={20} marginBottom={"14px"}>
                              {order.priceAfterDiscountState} {t("SAR")}
                            </Typography>
                            <Typography fontSize={20} marginBottom={"14px"}>
                              {order.paymentMethodState}
                            </Typography>
                            <Typography fontSize={20} marginTop={"33px"}>
                              {order.totalAmountState} {t("SAR")}
                            </Typography>
                          </div>
                          {/*  */}
                        </div>
                        {/*  */}
                      </div>
                    </div>
                    {/* DETAILS */}
                  </div>
                  {/*  */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
