import * as React from "react";

// COMPONENT

import Header from "./components/Header";
import Home from "./pages/Home";
import CartFull from "./components/CartFull";
import ProductsCategory from "./pages/ProductsCategory";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Profile from "./pages/Profile";
import ProfileOrders from "./pages/ProfileOrders";

// import cartEmbty from "./components/CartEmbty";
// CONTEXT
import { CartContext } from "./Context/CartContext";
import { ProducstContext } from "./Context/ProductContext";
import { InTheCart } from "./Context/InTheCart";

// REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IAMGE
import banner from "./assets/banner2.png";

// USE ULID LIBRARY //
import { v4 as uuidv4 } from "uuid";
// USE ULID LIBRARY //

// USE CLOUDINARY LIBRARY //

// USE CLOUDINARY LIBRARY //

function App() {
  // STATE //
  const [cartCount, setCartCount] = React.useState<number>(0);
  // const [Products, setProduct] = React.useState([
  //   {
  //     phonesnewArrival: [
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Iphone 13 Pro Max",
  //         price: 3000,
  //         imageProduct: banner,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Iphone",
  //       },
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Iphone 13 Pro Max",
  //         price: 5000,
  //         imageProduct: banner,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Iphone",
  //       },
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Redmi Note 8 Pro",
  //         price: 250,
  //         imageProduct: RedmiNote8Pro,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Xiaomi",
  //       },
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Samsung S25 Ultra",
  //         price: 600,
  //         imageProduct: Samsung25,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Samsung",
  //       },
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Huawei Nova 13",
  //         price: 460,
  //         imageProduct: HuaweiNova13,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Huawei",
  //       },
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Huawei Nova 13",
  //         price: 4060,
  //         imageProduct: HuaweiNova13,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Huawei",
  //       },
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Huawei Nova 13",
  //         price: 4060,
  //         imageProduct: HuaweiNova13,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Huawei",
  //       },
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Huawei Nova 13",
  //         price: 4060,
  //         imageProduct: HuaweiNova13,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Huawei",
  //       },
  //     ],
  //     phonesBestSaller: [
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Huawei Mate 20 pro",
  //         price: 400,
  //         imageProduct: HuaweiMate20pro,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Huawei",
  //       },
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Samsung Galaxy Fold 7",
  //         price: 700,
  //         imageProduct: SamsungGalaxyFold7,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Samsung",
  //       },
  //       {
  //         id: uuidv4(),
  //         nameProduct: "Xiaomi M 11",
  //         price: 460,
  //         imageProduct: XiaomiM11,
  //         category: "phones",
  //         isBrand: true,
  //         brand: "Xiaomi",
  //       },
  //     ],
  //   },
  // ]);
  const [Products, setProduct] = React.useState({
    phones: {
      phonesnewArrival: [
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy S25 Ultra",
          price: 5299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760095742/Samsung%20Galaxy%20S25%20Ultra.png",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Xiaomi Redmi Note 14 Pro",
          price: 1299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760105403/Xiaomi%20Redmi%20Note%2014%20Pro-4.jpg",
          category: "phones",
          isBrand: true,
          brand: "Xiaomi",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy S24 Ultra",
          price: 4799,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760095776/Samsung%20Galaxy%20S24%20Ultra.jpg",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple iPhone 16 Pro",
          price: 4999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760103693/Apple%20iPhone%2016%20Pro.png",
          category: "phones",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Oppo Reno 12 Pro",
          price: 1899,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106470/Oppo%20Reno%2012%20Pro.png",
          category: "phones",
          isBrand: true,
          brand: "Oppo",
        },
        {
          id: uuidv4(),
          nameProduct: "Google Pixel 9",
          price: 3299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106139/Google%20Pixel%209.png",
          category: "phones",
          isBrand: true,
          brand: "Google",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy A16",
          price: 649,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760095856/Samsung%20Galaxy%20A16.png",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Huawei Mate 60 Pro",
          price: 3899,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760104498/Huawei%20Mate%2060%20Pro-2.jpg",
          category: "phones",
          isBrand: true,
          brand: "Huawei",
        },
        {
          id: uuidv4(),
          nameProduct: "OnePlus 13",
          price: 3499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760105868/OnePlus%2013.png",
          category: "phones",
          isBrand: true,
          brand: "OnePlus",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple iPhone 15",
          price: 3299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760104073/Apple%20iPhone%2015-2.png",
          category: "phones",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Xiaomi 15 Pro",
          price: 3799,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760105478/Xiaomi%2015%20Pro-2.png",
          category: "phones",
          isBrand: true,
          brand: "Xiaomi",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy S25 Plus",
          price: 4299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760095827/Samsung%20Galaxy%20S25%20Plus.png",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Realme C67",
          price: 599,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106722/Realme%20C67-2.png",
          category: "phones",
          isBrand: true,
          brand: "Realme",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple iPhone 16 Plus",
          price: 4299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760103742/Iphone-16-plus_k8c17t.png",
          category: "phones",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy A35",
          price: 1299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760095933/Samsung%20Galaxy%20A35.webp",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "OnePlus Nord 4",
          price: 1599,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760105882/green_j2tmqw.png",
          category: "phones",
          isBrand: true,
          brand: "OnePlus",
        },
        {
          id: uuidv4(),
          nameProduct: "Google Pixel 9 Pro XL",
          price: 4499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106168/Google%20Pixel%209%20Pro%20XL.png",
          category: "phones",
          isBrand: true,
          brand: "Google",
        },
        {
          id: uuidv4(),
          nameProduct: "Xiaomi 14T Pro",
          price: 2499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760105560/Xiaomi%2014T%20Pro.png",
          category: "phones",
          isBrand: true,
          brand: "Xiaomi",
        },
        {
          id: uuidv4(),
          nameProduct: "Huawei Pura 70 Ultra",
          price: 4599,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760104607/Huawei%20Pura%2070%20Ultra.jpg",
          category: "phones",
          isBrand: true,
          brand: "Huawei",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy S25",
          price: 3699,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760095878/Samsung%20Galaxy%20S25.webp",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple iPhone 16 Pro Max",
          price: 5499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760103935/Apple%20iPhone%2016%20Pro%20Max.png",
          category: "phones",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Realme 13 Pro Plus",
          price: 1499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106843/Realme%2013%20Pro%20Plus.png",
          category: "phones",
          isBrand: true,
          brand: "Realme",
        },
        {
          id: uuidv4(),
          nameProduct: "Oppo Find X8",
          price: 3599,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106486/images-color-b-1-mo_d0b0jl.png",
          category: "phones",
          isBrand: true,
          brand: "Oppo",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy A55",
          price: 1699,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760096100/Samsung%20Galaxy%20A55.png",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Xiaomi 15 Ultra",
          price: 4299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760105588/Xiaomi%2015%20Ultra.png",
          category: "phones",
          isBrand: true,
          brand: "Xiaomi",
        },
        {
          id: uuidv4(),
          nameProduct: "Google Pixel 8a",
          price: 1999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106189/Google%20Pixel%208a.png",
          category: "phones",
          isBrand: true,
          brand: "Google",
        },
        {
          id: uuidv4(),
          nameProduct: "OnePlus 12",
          price: 2799,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760105901/12-green_iyc5fs.png",
          category: "phones",
          isBrand: true,
          brand: "OnePlus",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple iPhone 16",
          price: 3799,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760103790/Apple%20iPhone%2016.png",
          category: "phones",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy A25",
          price: 999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760096008/Samsung%20Galaxy%20A25.png",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Huawei Nova 12 Pro",
          price: 1899,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760104741/Huawei%20Nova%2012%20Pro.jpg",
          category: "phones",
          isBrand: true,
          brand: "Huawei",
        },
        {
          id: uuidv4(),
          nameProduct: "Xiaomi Redmi Note 14",
          price: 899,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760105641/Xiaomi%20Redmi%20Note%2014.png",
          category: "phones",
          isBrand: true,
          brand: "Xiaomi",
        },

        {
          id: uuidv4(),
          nameProduct: "OnePlus 13 Pro",
          price: 3999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760105943/13-black_bjy0fb.png",
          category: "phones",
          isBrand: true,
          brand: "OnePlus",
        },
        {
          id: uuidv4(),
          nameProduct: "Google Pixel 9 Pro",
          price: 3999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760106299/Google%20Pixel%209%20Pro.jpg",
          category: "phones",
          isBrand: true,
          brand: "Google",
        },
        {
          id: uuidv4(),
          nameProduct: "Realme GT 7 Pro",
          price: 2699,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106856/realme_gt_7_pro-1_yhzn0m.png",
          category: "phones",
          isBrand: true,
          brand: "Realme",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple iPhone 15 Pro Max",
          price: 4799,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760103807/Apple%20iPhone%2015%20Pro%20Max.png",
          category: "phones",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy S24",
          price: 3199,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760096166/Samsung%20Galaxy%20S24.png",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Xiaomi 15",
          price: 3299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760105659/Xiaomi%2015.png",
          category: "phones",
          isBrand: true,
          brand: "Xiaomi",
        },
        {
          id: uuidv4(),
          nameProduct: "Oppo Find X8 Pro",
          price: 4199,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106498/images-color-konka-b-1-mo_eh2sy2.png",
          category: "phones",
          isBrand: true,
          brand: "Oppo",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy A17",
          price: 749,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760096192/Samsung%20Galaxy%20A17.png",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
      ],
      phonesBestSaller: [
        {
          id: uuidv4(),
          nameProduct: "Oppo Reno 12 Pro",
          price: 666,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760106470/Oppo%20Reno%2012%20Pro.png",
          category: "phones",
          isBrand: true,
          brand: "Huawei",
        },
        {
          id: uuidv4(),
          nameProduct: "Xiaomi 15 Pro",
          price: 748,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760105478/Xiaomi%2015%20Pro-2.png",
          category: "phones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "OnePlus 13",
          price: 626,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760105868/OnePlus%2013.png",
          category: "phones",
          isBrand: true,
          brand: "Xiaomi",
        },
      ],
    },

    headphones: {
      headphonesNewArrival: [
        {
          id: uuidv4(),
          nameProduct: "Apple AirPods Pro 2",
          price: 999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760091547/Apple%20AirPods%20Pro%202.png",
          category: "headphones",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Sony WF-1000XM5",
          price: 1099,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760093380/Sony%20WF-1000XM5.jpg",
          category: "headphones",
          isBrand: true,
          brand: "Sony",
        },

        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy Buds 2 Pro",
          price: 749,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760092253/Samsung%20Galaxy%20Buds%202%20Pro.jpg",
          category: "headphones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy Buds 3 Pro",
          price: 849,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760092307/Samsung%20Galaxy%20Buds%203%20Pro.jpg",
          category: "headphones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "JBL Live Pro 2 TWS",
          price: 599,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760093765/JBL%20Live%20Pro%202%20TWS.png",
          category: "headphones",
          isBrand: true,
          brand: "JBL",
        },
        {
          id: uuidv4(),
          nameProduct: "JBL Tune 770NC",
          price: 449,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760093781/51V1bf76cML_gqyfrl.jpg",
          category: "headphones",
          isBrand: true,
          brand: "JBL",
        },
        {
          id: uuidv4(),
          nameProduct: "JBL Wave Beam",
          price: 299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760093809/JBL%20Wave%20Beam.png",
          category: "headphones",
          isBrand: true,
          brand: "JBL",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple AirPods Max",
          price: 2199,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/c_pad,w_150,h_150/v1760091690/Apple%20AirPods%20Max.png",
          category: "headphones",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple AirPods 3",
          price: 699,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_fill,w_150,h_150,f_png/v1760091749/Apple%20AirPods%203.jpg",
          category: "headphones",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Sony WF-1000XM4",
          price: 899,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760093415/design-medium_uznl4t.jpg",
          category: "headphones",
          isBrand: true,
          brand: "Sony",
        },
        {
          id: uuidv4(),
          nameProduct: "Anker Soundcore Space One",
          price: 399,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760094204/Anker%20Soundcore%20Space%20One.jpg",
          category: "headphones",
          isBrand: true,
          brand: "Anker",
        },
        {
          id: uuidv4(),
          nameProduct: "Realme Buds T200 Lite",
          price: 149,
          imageProduct:
            "https://image01.realme.net/general/20241213/17340553562869db2cdf8462f44b7b0582798e1a376fe.png",
          category: "headphones",
          isBrand: true,
          brand: "Realme",
        },
        {
          id: uuidv4(),
          nameProduct: "JBL Tune 510BT",
          price: 199,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760093835/JBL%20Tune%20510BT.png",
          category: "headphones",
          isBrand: true,
          brand: "JBL",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy Buds FE",
          price: 399,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760092397/Samsung%20Galaxy%20Buds%20FE.jpg",
          category: "headphones",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Sony WH-CH720N",
          price: 549,
          imageProduct:
            "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha",
          category: "headphones",
          isBrand: true,
          brand: "Sony",
        },
        {
          id: uuidv4(),
          nameProduct: "JBL Quantum 910",
          price: 899,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760093887/JBL%20Quantum%20910.png",
          category: "headphones",
          isBrand: true,
          brand: "JBL",
        },
        {
          id: uuidv4(),
          nameProduct: "Anker Soundcore Liberty 4",
          price: 499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760094246/51MAaqvg3yL_vy4bih.jpg",
          category: "headphones",
          isBrand: true,
          brand: "Anker",
        },
        {
          id: uuidv4(),
          nameProduct: "JBL Reflect Flow Pro",
          price: 649,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760093872/JBL%20Reflect%20Flow%20Pro.png",
          category: "headphones",
          isBrand: true,
          brand: "JBL",
        },
        {
          id: uuidv4(),
          nameProduct: "Sony LinkBuds S",
          price: 699,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/e_background_removal/c_pad,w_150,h_150,f_png/v1760093433/61j8IjKozjL._UF350_350_QL80__beaatu.jpg",
          category: "headphones",
          isBrand: true,
          brand: "Sony",
        },
      ],
      headphonesBestSaller: [
        {
          id: uuidv4(),
          nameProduct: "Razer Kraken V3",
          price: 3000,
          imageProduct: banner,
          category: "headphones",
          isBrand: true,
          brand: "Razer",
        },
      ],
    },
    watches: {
      watchesNewArrival: [
        {
          id: uuidv4(),
          nameProduct: "Apple Watch Ultra 3",
          price: 3999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214061/Apple%20Watch%20Ultra%203-2.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple Watch Series 11",
          price: 1999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214126/Apple%20Watch%20Series%2011.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Apple Watch SE 3",
          price: 1299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214172/Apple%20Watch%20SE%203.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy Watch 8",
          price: 1499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214252/Samsung%20Galaxy%20Watch%208.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Samsung Galaxy Watch Ultra",
          price: 2199,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214287/Samsung%20Galaxy%20Watch%20Ultra.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Samsung",
        },
        {
          id: uuidv4(),
          nameProduct: "Google Pixel Watch 3",
          price: 1599,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214341/google-watch-2024-45mm-obsidian_bd1gxe.webp",
          category: "smartwatch",
          isBrand: true,
          brand: "Google",
        },

        {
          id: uuidv4(),
          nameProduct: "Huawei Watch GT 5",
          price: 999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770215108/Huawei%20Watch%20GT%205.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Huawei",
        },
        {
          id: uuidv4(),
          nameProduct: "Huawei Watch 5 Pro",
          price: 1499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214492/Huawei%20Watch%205%20Pro.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Huawei",
        },
        {
          id: uuidv4(),
          nameProduct: "Xiaomi Watch S3",
          price: 699,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214541/Xiaomi%20Watch%20S3.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Xiaomi",
        },
        {
          id: uuidv4(),
          nameProduct: "Xiaomi Watch 2 Pro",
          price: 899,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214623/Xiaomi%20Watch%202%20Pro.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Xiaomi",
        },

        {
          id: uuidv4(),
          nameProduct: "OnePlus Watch 2",
          price: 999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214814/OnePlus%20Watch%202.png",
          category: "smartwatch",
          isBrand: true,
          brand: "OnePlus",
        },
        {
          id: uuidv4(),
          nameProduct: "Realme Watch 3 Pro",
          price: 499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214864/Realme%20Watch%203%20Pro.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Realme",
        },
        {
          id: uuidv4(),
          nameProduct: "Fitbit Sense 3",
          price: 1199,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214949/Fitbit%20Sense%203.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Fitbit",
        },
        {
          id: uuidv4(),
          nameProduct: "Fitbit Versa 5",
          price: 899,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770214990/Fitbit%20Versa%205.png",
          category: "smartwatch",
          isBrand: true,
          brand: "Fitbit",
        },
      ],
      watchesBestSaller: [
        {
          id: uuidv4(),
          nameProduct: "Razer Kraken V3",
          price: 3000,
          imageProduct: banner,
          category: "headphones",
          isBrand: true,
          brand: "Razer",
        },
      ],
    },
    cameras: {
      camerasNewArrival: [
        {
          id: uuidv4(),
          nameProduct: "Sony A1 II",
          price: 18999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770215649/Sony%20A1%20II.png",
          category: "camera",
          isBrand: true,
          brand: "Sony",
        },
        {
          id: uuidv4(),
          nameProduct: "Sony A7 IV",
          price: 8999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770215695/Sony%20A7%20IV.webp",
          category: "camera",
          isBrand: true,
          brand: "Sony",
        },
        {
          id: uuidv4(),
          nameProduct: "Canon EOS R1",
          price: 16999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770215878/Canon%20EOS%20R1.png",
          category: "camera",
          isBrand: true,
          brand: "Canon",
        },
        {
          id: uuidv4(),
          nameProduct: "Canon EOS R5 II",
          price: 11999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770215845/Canon%20EOS%20R5%20II.png",
          category: "camera",
          isBrand: true,
          brand: "Canon",
        },
        {
          id: uuidv4(),
          nameProduct: "Canon EOS R6 II",
          price: 7999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770215907/Canon%20EOS%20R6%20II.png",
          category: "camera",
          isBrand: true,
          brand: "Canon",
        },
        {
          id: uuidv4(),
          nameProduct: "Nikon Z9",
          price: 15999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770215964/Nikon%20Z9.png",
          category: "camera",
          isBrand: true,
          brand: "Nikon",
        },
        {
          id: uuidv4(),
          nameProduct: "Nikon Z8",
          price: 10999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770215989/Nikon%20Z8.png",
          category: "camera",
          isBrand: true,
          brand: "Nikon",
        },
        {
          id: uuidv4(),
          nameProduct: "Nikon Z6 III",
          price: 6999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770216029/Nikon%20Z6%20III.png",
          category: "camera",
          isBrand: true,
          brand: "Nikon",
        },
        {
          id: uuidv4(),
          nameProduct: "Leica Q3",
          price: 23999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770224476/Leica%20Q3.png",
          category: "camera",
          isBrand: true,
          brand: "Leica",
        },
        {
          id: uuidv4(),
          nameProduct: "Leica SL3",
          price: 28999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770224404/Leica%20SL3.png",
          category: "camera",
          isBrand: true,
          brand: "Leica",
        },
        {
          id: uuidv4(),
          nameProduct: "GoPro Hero 13 Black",
          price: 1999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770224365/GoPro%20Hero%2013%20Black.png",
          category: "camera",
          isBrand: true,
          brand: "GoPro",
        },
        {
          id: uuidv4(),
          nameProduct: "DJI Osmo Action 5",
          price: 1799,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770224271/DJI%20Osmo%20Action%205.png",
          category: "camera",
          isBrand: true,
          brand: "DJI",
        },
        {
          id: uuidv4(),
          nameProduct: "DJI Pocket 3",
          price: 2499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770224293/DJI%20Pocket%203.png",
          category: "camera",
          isBrand: true,
          brand: "DJI",
        },
        {
          id: uuidv4(),
          nameProduct: "Insta360 X4",
          price: 2299,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770224333/Insta360%20X4.png",
          category: "camera",
          isBrand: true,
          brand: "Insta360",
        },
      ],
      camerasBestSaller: [
        {
          id: uuidv4(),
          nameProduct: "Razer Kraken V3",
          price: 3000,
          imageProduct: banner,
          category: "headphones",
          isBrand: true,
          brand: "Razer",
        },
      ],
    },
    laptops: {
      laptopsNewArrival: [
        {
          id: uuidv4(),
          nameProduct: "Apple MacBook Pro 16 M3 Max",
          price: 12999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225032/Apple%20MacBook%20Pro%2016%20M3%20Max.png",
          category: "laptop",
          isBrand: true,
          brand: "Apple",
        },

        {
          id: uuidv4(),
          nameProduct: "Apple MacBook Air 15 M3",
          price: 6499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225098/Apple%20MacBook%20Air%2015%20M3.png",
          category: "laptop",
          isBrand: true,
          brand: "Apple",
        },
        {
          id: uuidv4(),
          nameProduct: "Dell XPS 16 (2025)",
          price: 8999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225137/Dell%20XPS%2016%20%282025%29.png",
          category: "laptop",
          isBrand: true,
          brand: "Dell",
        },
        {
          id: uuidv4(),
          nameProduct: "Dell XPS 14 (2025)",
          price: 7499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225164/Dell%20XPS%2014%20%282025%29.png",
          category: "laptop",
          isBrand: true,
          brand: "Dell",
        },
        {
          id: uuidv4(),
          nameProduct: "Dell Inspiron 16 Plus",
          price: 4999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225188/Dell%20Inspiron%2016%20Plus.png",
          category: "laptop",
          isBrand: true,
          brand: "Dell",
        },
        {
          id: uuidv4(),
          nameProduct: "HP Spectre x360 16",
          price: 7999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225232/HP%20Spectre%20x360%2016.webp",
          category: "laptop",
          isBrand: true,
          brand: "HP",
        },
        {
          id: uuidv4(),
          nameProduct: "HP Envy 16",
          price: 5699,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225271/HP%20Envy%2016.webp",
          category: "laptop",
          isBrand: true,
          brand: "HP",
        },
        {
          id: uuidv4(),
          nameProduct: "HP Omen 17",
          price: 8999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225375/HP%20Omen%2017.png",
          category: "laptop",
          isBrand: true,
          brand: "HP",
        },
        {
          id: uuidv4(),
          nameProduct: "Lenovo Legion Pro 7i",
          price: 8999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225422/Lenovo%20Legion%20Pro%207i.png",
          category: "laptop",
          isBrand: true,
          brand: "Lenovo",
        },
        {
          id: uuidv4(),
          nameProduct: "Lenovo Yoga Pro 9i",
          price: 7499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225444/Lenovo%20Yoga%20Pro%209i.png",
          category: "laptop",
          isBrand: true,
          brand: "Lenovo",
        },
        {
          id: uuidv4(),
          nameProduct: "Lenovo ThinkPad X1 Carbon Gen 12",
          price: 8999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225466/Lenovo%20ThinkPad%20X1%20Carbon%20Gen%2012.png",
          category: "laptop",
          isBrand: true,
          brand: "Lenovo",
        },
        {
          id: uuidv4(),
          nameProduct: "Asus ROG Strix Scar 18",
          price: 10999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225507/Asus%20ROG%20Strix%20Scar%2018.png",
          category: "laptop",
          isBrand: true,
          brand: "Asus",
        },
        {
          id: uuidv4(),
          nameProduct: "Asus ZenBook Pro 16X OLED",
          price: 8999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225535/Asus%20ZenBook%20Pro%2016X%20OLED.png",
          category: "laptop",
          isBrand: true,
          brand: "Asus",
        },
        {
          id: uuidv4(),
          nameProduct: "Asus VivoBook S15 OLED",
          price: 4499,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225560/Asus%20VivoBook%20S15%20OLED.png",
          category: "laptop",
          isBrand: true,
          brand: "Asus",
        },
        {
          id: uuidv4(),
          nameProduct: "MSI Raider GE78 HX",
          price: 10999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225607/MSI%20Raider%20GE78%20HX.png",
          category: "laptop",
          isBrand: true,
          brand: "MSI",
        },
        {
          id: uuidv4(),
          nameProduct: "MSI Prestige 16 AI Evo",
          price: 6999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225647/MSI%20Prestige%2016%20AI%20Evo.png",
          category: "laptop",
          isBrand: true,
          brand: "MSI",
        },
        {
          id: uuidv4(),
          nameProduct: "Razer Blade 16",
          price: 11999,
          imageProduct:
            "https://res.cloudinary.com/dji96h9oetest/image/upload/v1770225782/Razer%20Blade%2016%20%282025%29.png",
          category: "laptop",
          isBrand: true,
          brand: "Razer",
        },
      ],
      laptopsBestSaller: [
        {
          id: uuidv4(),
          nameProduct: "Razer Kraken V3",
          price: 3000,
          imageProduct: banner,
          category: "headphones",
          isBrand: true,
          brand: "Razer",
        },
      ],
    },
  });

  const [addToCart, setAddToCart] = React.useState<any[]>([]);
  // STATE //

  const phonesnewArrival = Products.phones.phonesnewArrival;
  const phonesBestSaller = Products.phones.phonesBestSaller;
  const headphonesNewArrival = Products.headphones.headphonesNewArrival;
  const headphonesBestSaller = Products.headphones.headphonesBestSaller;
  const watchesNewArrival = Products.watches.watchesNewArrival;
  const watchesBestSaller = Products.watches.watchesBestSaller;
  const camerasNewArrival = Products.cameras.camerasNewArrival;
  const camerasBestSaller = Products.cameras.camerasBestSaller;
  const laptopsNewArrival = Products.laptops.laptopsNewArrival;
  const laptopsBestSaller = Products.laptops.laptopsBestSaller;

  return (
    <BrowserRouter>
      <InTheCart.Provider
        value={{ addToCart: addToCart, setAddToCart: setAddToCart }}
      >
        <ProducstContext.Provider
          value={{
            phonesnewArrival: phonesnewArrival,
            phonesBestSaller: phonesBestSaller,
            headphonesNewArrival: headphonesNewArrival,
            headphonesBestSaller: headphonesBestSaller,
            watchesNewArrival: watchesNewArrival,
            watchesBestSaller: watchesBestSaller,
            camerasNewArrival: camerasNewArrival,
            camerasBestSaller: camerasBestSaller,
            laptopsNewArrival: laptopsNewArrival,
            laptopsBestSaller: laptopsBestSaller,

            setProduct: setProduct,
          }}
        >
          <CartContext.Provider
            value={{
              cartCount: cartCount,
              setCartCount: setCartCount,
            }}
          >
            <Header itemCart={cartCount} />
            <Routes>
              <Route path="/" element={<Home />}>
                {/* <Route index element={<Banner />} /> */}
                {/* <Route path="blogs" element={<Blogs />} /> */}
                {/* <Route path="contact" element={<Contact />} /> */}
                {/* <Route path="/test" element={<cartEmbty />} /> */}
              </Route>
              <Route path="Cart" element={<CartFull />} />
              <Route path="Login" element={<Login />} />
              <Route path="SingUp" element={<SingUp />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="Profile/Orders" element={<ProfileOrders />} />
              <Route path="ProductsCategory" element={<ProductsCategory />} />

              <></>
            </Routes>
          </CartContext.Provider>
        </ProducstContext.Provider>
      </InTheCart.Provider>
    </BrowserRouter>
  );
}

export default App;
