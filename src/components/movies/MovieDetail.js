import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, imgLink, tmdb } from "../../config";
import MovieCredit from "./MovieCredit";
import MovieSimilar from "./MovieSimilar";
import MovieVideo from "./MovieVideo";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const { data, error } = useSWR(tmdb.getMovieDetail(movieId), fetcher);
  const loading = !data && !error;
  useEffect(() => {
    setMovie(data);
  }, [data]);
  return (
    <div className="py-10">
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto"></div>
      )}
      {!loading && (
        <>
          <div className="w-full h-[600px] relative mb-10">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${imgLink}${
                  movie?.backdrop_path || movie?.poster_path
                })`,
              }}
            ></div>
          </div>
          <div className="w-full max-w-[800px] h-[400px] mx-auto -mt-[200px] relative z-10 pb-10">
            <img
              src={`${imgLink}${movie?.backdrop_path || movie?.poster_path}`}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h1 className="text-center text-3xl text-white font-bold mb-10">
            {movie?.title}
          </h1>
          <div className="flex justify-center items-center gap-x-5">
            {movie?.genres &&
              movie.genres.map((item) => {
                return (
                  <span
                    key={item.id}
                    className="py-2 px-4 border border-primary text-primary"
                  >
                    {item.name}
                  </span>
                );
              })}
          </div>
          {movie?.overview && (
            <p className="text-center p-5 text-white leading-relaxed max-w-[600px] mx-auto mb-10">
              {movie.overview}
            </p>
          )}
          <MovieCredit movieId={movieId}></MovieCredit>
          <MovieVideo movieId={movieId}></MovieVideo>
          <MovieSimilar movieId={movieId}></MovieSimilar>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
