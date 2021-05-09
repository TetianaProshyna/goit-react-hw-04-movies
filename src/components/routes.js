import { lazy } from "react";

const HomePage = lazy(() =>
  import("../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details" */
  )
);
const MoviesPage = lazy(() =>
  import("../pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const Cast = lazy(() =>
  import("../components/Cast/Cast" /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import("../components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);

export const routes = [
  {
    path: "/",
    label: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: "/movies/:movieId",
    label: "Movie Details Page",
    component: MovieDetailsPage,
  },
  {
    path: "/movies",
    label: "Movies Page",
    component: MoviesPage,
    exact: true,
  },
];
export const routesDetails = [
  {
    path: "/movies/:movieId/cast",
    label: "Cast",
    component: Cast,
  },
  {
    path: "/movies/:movieId/reviews",
    label: "Reviews",
    component: Reviews,
  },
];
