import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdb } from "../../config";
import MovieCard from "./MovieCard";

const MovieList = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(tmdb.getListMovie(type), fetcher);
  useEffect(() => {
    if (data?.results) {
      setMovies(data.results);
    }
  }, [data]);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies &&
          movies.map((item) => {
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
  );
};

export default MovieList;
