import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
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
      search: `query=${location.state.query}`,
    });
    console.log(location.search);
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
        <button onClick={this.hanleGoBack} className="button" type="button">
          ← Go back
        </button>
        <div>
          <img src={imgUrl} alt="" />
          <h2>{title}</h2>
          <p>{vote_average}</p>
          <p>{overview}</p>
          <p>{genresList}</p>
        </div>
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

        <Route path={"/movies/:movieId/cast"} component={Cast} />
        <Route path={"/movies/:movieId/reviews"} component={Reviews} />
      </>
    );
  }
}
export default MovieDetailsPage;
