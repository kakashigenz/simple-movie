import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdb } from "../../config";
import Button from "../button/Button";

function getGenres(data) {
  const genres = new Map();
  if (data) {
    data.forEach((item) => {
      genres.set(item.id, item.name);
    });
  }
  return genres;
}

const BannerItem = ({ id, backdrop_path, title, genreList }) => {
  const { data } = useSWR(tmdb.getGenreList(), fetcher);
  const [genres, setGenres] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setGenres(getGenres(data?.genres));
  }, [data]);
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={tmdb.getImageOriginal(backdrop_path)}
        alt=""
        className="w-full h-full object-cover rounded-lg object-center"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          {genreList &&
            genreList.map((item) => {
              return (
                <span
                  key={item}
                  className="py-2 px-4 border border-white rounded-md"
                >
                  {genres && genres.get(item)}
                </span>
              );
            })}
        </div>
        <Button onClick={() => navigate(`/movies/${id}`)}>watch now</Button>
      </div>
    </div>
  );
};

export default BannerItem;
