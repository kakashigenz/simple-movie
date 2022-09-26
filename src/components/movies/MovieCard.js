import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdb } from "../../config";
import Button from "../button/Button";

const MovieCard = ({ poster_path, title, vote_average, release_date, id }) => {
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white h-full flex flex-col select-none">
      <img
        src={tmdb.getImage500(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className=" text-xl font-bold mb-3">{title}</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <Button
        onClick={() => navigate(`/movies/${id}`)}
        full
        bgColor="bg-secondary"
      >
        watch now
      </Button>
    </div>
  );
};

export default MovieCard;
