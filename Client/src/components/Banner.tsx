import Box from "@mui/material/Box";
import Xiaomi15Ultra from "../assets/Xiaomi-15-Ultra-Banner.webp";
import samsungs25Ultra from "../assets/samsung s25 ultra banner.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={500}
      slidesPerView={1}
      navigation
      className="swiper-slide"
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Box
          component="img"
          src="https://images.macrumors.com/t/dQzfQzCqjlEJdrgq3QVPbLFzfeM=/3532x/article-new/2023/09/iPhone-16-Side-Feature.jpg"
          sx={{
            width: "100%",
            height: "auto",
            backgroundImage: "contain",
          }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Box
          component="img"
          src={samsungs25Ultra}
          sx={{
            width: "100%",
            height: "auto",
            backgroundImage: "contain",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          component="img"
          src={Xiaomi15Ultra}
          sx={{
            width: "100%",
            height: "auto",
            backgroundImage: "contain",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
