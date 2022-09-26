import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdb } from "../../config";
import MovieCard from "./MovieCard";

const MovieSimilar = ({ movieId }) => {
  const { data } = useSWR(tmdb.getMetaMovie(movieId, "similar"), fetcher);
  if (!data) return null;
  const { results } = data;
  return (
    <div className="py-5">
      <h2 className="text-white text-3xl font-bold text-center">Similar</h2>
      <div className="movie-list p-5">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results &&
            results.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <MovieCard
                    id={item.id}
                    title={item.title}
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                    release_date={item.release_date}
                  ></MovieCard>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieSimilar;
