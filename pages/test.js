import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

function App() {
  const imageUrl = [
    { url: "/histoire1/1.jpg", text: " Les glaces délicieuses" },
    {
      url: "/histoire1/2.jpg",
      text: `Ding ding ding ding « Shubham, Ira, Tonton Sorbet est là !»`,
    },
    {
      url: "/histoire1/3.jpg",
      text: "Tous les enfants se précipitent vers Tonton Sorbet !",
    },
    {
      url: "/histoire1/4.jpg",
      text: " Nous nous regardons à travers les bouteilles. Nos visages ont l'air si drôles !",
    },
    {
      url: "/histoire1/5.jpg",
      text: "Miammm... Des glaces magiques et colorées !",
    },
    {
      url: "/histoire1/6.jpg",
      text: "              Saee tapote la glace de Abhi.",
    },
    {
      url: "/histoire1/7.jpg",
      text: "              Une glace tombe, mais Bhoori est très content.",
    },
    {
      url: "/histoire1/8.jpg",
      text: "              J'aime les glaces. J'en vois partout.",
    },
    {
      url: "/histoire1/9.jpg",
      text: "              Shubham veut être un Tonton Sorbet quand il sera grand.",
    },
    {
      url: "/histoire1/10.jpg",
      text: "              Il me fera une ÉNORME glace.",
    },
    {
      url: "/histoire1/11.jpg",
      text: "              Shubham pourra en manger un morceau, tout comme Bhoori.",
    },
    {
      url: "/histoire1/12.jpg",
      text: "              J'avalerai le reste !",
    },
    { url: "/histoire1/13.jpg", text: "miam miam mmiammmmm" },
  ];
  return (
    <div className="w-screen h-screen flex justify-center  items-center">
      <div className="md:w-[50%] w-[100%]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {imageUrl.map((item) => (
            <SwiperSlide key={item.url} className=" ">
              <div className="flex flex-col items-center gap-5 p-5 ">
                <img
                  className="w-full h-[300px] sm:h-[500px] rounded-xl "
                  src={item.url}
                  alt="slide_image"
                />
                <p className="text-2xl sm:text-4xl text-center w-[75%]">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
