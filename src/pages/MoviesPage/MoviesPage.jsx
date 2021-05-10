import { Component } from "react";
import PropTypes from "prop-types";
import QueryString from "query-string";
import MovieList from "../../components/MovieList/MovieList";
import ApiService from "../../services/ApiService/ApiService";
const apiService = new ApiService();
class MoviesPage extends Component {
  qs = QueryString.parse(this.props.location.search);
  state = {
    query: this.qs.query || "",
    movies: [],
    isLoading: false,
  };
  componentDidMount() {
    if (this.state.query) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    this.setState({ isLoading: true });
    apiService
      .getMoviesOnSearch(this.state.query)
      .then((data) => {
        this.setState({
          movies: data,
        });
      })
      .catch((e) => console.log(e))
      .finally(() => {
        this.setState({ isLoading: false });
      });
    if (this.state.query) {
      this.props.history.push({
        search: `query=${this.state.query}`,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchMovies();
    e.target.reset();
  };
  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="searchForm">
          <input onChange={this.handleInputChange} className="input" />
          <button type="submit" className="button searchBtn">
            Search
          </button>
        </form>
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.movies.length > 0 && (
          <MovieList
            pathname={this.props.location.pathname}
            query={this.state.query}
            items={this.state.movies}
          />
        )}
      </>
    );
  }
}
MoviesPage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};
export default MoviesPage;
