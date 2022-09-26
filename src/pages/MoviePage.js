import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
import { fetcher, tmdb } from "../config";
import useDebounce from "../hooks/useDebounce";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(tmdb.getListMovie("popular"));
  const [query, setQuery] = useState("");
  const searchValue = useDebounce(query);
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(url, fetcher);
  //phan trang
  const itemsPerPage = 20;
  // const totalPage = data?.total_pages || 0;
  const totalResult = data?.total_results || 0;
  const [pageCount, setPageCount] = useState(0);
  const loading = !data && !error;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      setUrl(tmdb.getListSearch(searchValue, page));
    } else {
      setUrl(tmdb.getListMovie("popular", page));
    }
  }, [searchValue, page]);

  useEffect(() => {
    setMovies(data?.results);
  }, [data]);

  //phan trang
  useEffect(() => {
    setPageCount(Math.ceil(totalResult / itemsPerPage));
  }, [totalResult]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  return (
    <Fragment>
      <div className="flex items-center py-5 page-container">
        <input
          type="search"
          name="search"
          placeholder="Enter your movie name..."
          className="flex-1 outline-none p-4 bg-slate-800 text-white"
          onChange={handleChange}
        />
        <button className="bg-primary p-4 cursor-pointer text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto"></div>
      )}
      <div className="movie-grid grid grid-cols-4 gap-10 page-container">
        {movies &&
          movies.map((item) => {
            return (
              <MovieCard
                key={item.id}
                id={item.id}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                release_date={item.release_date}
              ></MovieCard>
            );
          })}
      </div>
      <div className="my-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </Fragment>
  );
};

export default MoviePage;
