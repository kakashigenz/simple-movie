import React from "react";
import useSWR from "swr";
import { fetcher, tmdb } from "../../config";

const MovieVideo = ({ movieId }) => {
  const { data } = useSWR(tmdb.getMetaMovie(movieId, "videos"), fetcher);
  if (!data) return null;
  const { results } = data;
  const trailers =
    results &&
    results.filter((item) => {
      return item.type.toLowerCase() === "trailer";
    });
  return (
    <div className="py-5">
      <h3 className="text-white text-3xl p-5 font-medium text-center">
        Trailer
      </h3>
      {trailers &&
        trailers.slice(0, 1).map((item) => {
          return (
            <div key={item.id}>
              <iframe
                width="907"
                height="510"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={`${item.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mx-auto"
              ></iframe>
            </div>
          );
        })}
    </div>
  );
};

export default MovieVideo;
