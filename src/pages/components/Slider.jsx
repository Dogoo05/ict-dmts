"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Parallax]}
      speed={600}
      parallax={true}
      pagination={{ clickable: true }}
      navigation
      className="w-auto h-auto text-l rounded-[20px] "
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
    >
      {" "}
      <div
        slot="container-start"
        className="absolute inset-0 w-[130%] h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1657405826726-ac52271d3bb1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
        data-swiper-parallax="-23%"
      ></div>{" "}
      <SwiperSlide>
        {" "}
        <div className="p-10 text-white flex flex-col gap-[20px] p-[50px]">
          {" "}
          <h1 className="text-4xl font-light " data-swiper-parallax="-300">
            {" "}
            Мэдээлэл Технологи{" "}
          </h1>{" "}
          <p className="max-w-md" data-swiper-parallax="-100">
            {" "}
            Өнөө үед мэдээлэл технологи нь боловсрол, эрүүл мэнд, бизнес,
            харилцаа холбоо гээд бүхий л салбарын хөгжлийн түлхүүр болж байна.
            Хүн бүрийн өдөр тутмын амьдрал цахим хэрэглээнээс салшгүй болжээ.{" "}
          </p>{" "}
        </div>{" "}
      </SwiperSlide>{" "}
      <SwiperSlide>
        {" "}
        <div className="p-10 text-white flex flex-col gap-[20px] p-[50px]">
          {" "}
          <h1 className="text-4xl font-light" data-swiper-parallax="-300">
            {" "}
            Програмчлал{" "}
          </h1>{" "}
          <p className="max-w-md" data-swiper-parallax="-100">
            {" "}
            Програмчлал нь зөвхөн програм зохиох бус, асуудлыг шинжлэх, логик
            сэтгэх, бүтээлчээр шийдэх чадварыг хөгжүүлдэг. Энэ ур чадвар нь
            өнөөдрийн ажил мэргэжлийн зах зээл дээр хамгийн эрэлттэй
            мэдлэгүүдийн нэг юм.{" "}
          </p>{" "}
        </div>{" "}
      </SwiperSlide>{" "}
      <SwiperSlide>
        {" "}
        <div className="p-10 text-white flex flex-col gap-[20px] p-[50px]">
          {" "}
          <h1 className="text-4xl font-light" data-swiper-parallax="-300">
            {" "}
            Интернет ба Сүлжээ{" "}
          </h1>{" "}
          <p className="max-w-md" data-swiper-parallax="-100">
            {" "}
            Интернет нь дэлхийн өнцөг булан бүрийн хүмүүсийг холбож, мэдээлэл
            дамжуулах хамгийн хурдан хэрэгсэл болсон. Мөн мэдлэгийн хязгааргүй
            эх сурвалж бөгөөд зөв ашиглаж чадвал хөгжлийн хамгийн том боломжийг
            нээдэг.{" "}
          </p>{" "}
        </div>{" "}
      </SwiperSlide>{" "}
    </Swiper>
  );
}
