import "swiper/scss";
// import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
// import MoviePage from "./pages/MoviePage";
// import MovieDetail from "./components/movies/MovieDetail";
import { lazy, Suspense } from "react";

const nav = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/movies",
    name: "Movies",
  },
];

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetail = lazy(() => import("./components/movies/MovieDetail"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<Header nav={nav}></Header>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movies/:movieId"
            element={<MovieDetail></MovieDetail>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
