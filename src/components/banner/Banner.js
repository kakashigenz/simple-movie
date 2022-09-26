import React from "react";
import useSWR from "swr";
import { fetcher, tmdb } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { data } = useSWR(tmdb.getListMovie("upcoming"), fetcher);
  const movies = data?.results || [];
  console.log(data);
  return (
    <section className="banner h-[500px] page-container mb-20">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies &&
          movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <BannerItem
                  id={item.id}
                  backdrop_path={item.backdrop_path}
                  title={item.title}
                  genreList={item.genre_ids}
                ></BannerItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Banner;
