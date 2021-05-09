import { Component, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
import { routesDetails } from "../../components/routes";
import PropTypes from "prop-types";
import ApiService from "../../services/ApiService/ApiService";
const apiService = new ApiService();

class MovieDetailsPage extends Component {
  state = {
    genres: "",
    overview: "",
    poster_path: "",
    title: "",
    vote_average: "",
  };
  componentDidMount() {
    const id = this.props.match.params.movieId;
    apiService
      .getMovieById(id)
      .then(({ genres, overview, poster_path, title, vote_average }) => {
        this.setState({
          genres,
          overview,
          poster_path,
          title,
          vote_average,
        });
      });
  }
  hanleGoBack = () => {
    const { history, location } = this.props;

    history.push({
      pathname: location.state?.pathname || "/",
      state: location.state,
      search: location.state.query ? `query=${location.state.query}` : null,
    });
  };
  render() {
    const id = this.props.match.params.movieId;
    const { genres, overview, poster_path, title, vote_average } = this.state;
    let genresList, imgUrl;

    if (genres) {
      genresList = genres.map((el) => el.name).join(", ");
    }
    if (poster_path) {
      imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    }

    return (
      <>
        <button
          onClick={this.hanleGoBack}
          className="button backBtn"
          type="button"
        >
          ← Go back
        </button>
        <div className="movieDetails">
          <img className="moviePoster" src={imgUrl} alt="" />
          <div className="description">
            <h2 className="mar">{title}</h2>
            <p className="mar">User score: {vote_average * 10}%</p>
            <h4 className="mar">Overview</h4>
            <p className="mar">{overview}</p>
            <h4 className="mar">Genres</h4>
            <p>{genresList}</p>
          </div>
        </div>
        <div>
          <h3 className="mar">Additional information</h3>
          <ul>
            <li className="mar">
              <NavLink
                to={{
                  pathname: `/movies/${id}/cast`,
                  state: {
                    query: this.props.location.state.query,
                    pathname: this.props.location.state.pathname,
                  },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className="mar">
              <NavLink
                to={{
                  pathname: `/movies/${id}/reviews`,
                  state: {
                    query: this.props.location.state.query,
                    pathname: this.props.location.state.pathname,
                  },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <Suspense fallback={<p>Loading...</p>}>
          {routesDetails.map(({ label, path, exact, component }) => (
            <Route
              key={label}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
        </Suspense>
      </>
    );
  }
}
MovieDetailsPage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};
export default MovieDetailsPage;
