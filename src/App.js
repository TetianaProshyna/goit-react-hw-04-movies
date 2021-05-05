import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
