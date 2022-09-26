import React from "react";
import useSWR from "swr";
import { fetcher, imgLink, tmdb } from "../../config";

const MovieCredit = ({ movieId }) => {
  const { data } = useSWR(tmdb.getMetaMovie(movieId, "credits"), fetcher);
  return (
    data && (
      <>
        <h2 className="text-center text-2xl mb-10 text-white font-medium">
          Cast
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {data.cast.slice(0, 4).map((item) => (
            <div className="cast-item" key={item.id}>
              <img
                src={`${imgLink}${item.profile_path}`}
                alt="Not found"
                className="w-full h-[350px] object-cover rounded-lg mb-3 text-white"
              />
              <h3 className="text-white font-medium text-xl">{item.name}</h3>
            </div>
          ))}
        </div>
      </>
    )
  );
};

export default MovieCredit;
