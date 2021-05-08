import { Component } from "react";
import PropTypes from "prop-types";
import MovieList from "../../components/MovieList/MovieList";
import ApiService from "../../services/ApiService/ApiService";
const apiService = new ApiService();
class HomePage extends Component {
  state = {
    trading: [],
    isLoading: false,
  };
  componentDidMount() {
    this.fetchTrading();
  }
  fetchTrading = () => {
    this.setState({ isLoading: true });
    apiService
      .getTradingMovies()
      .then((data) => {
        this.setState({ trading: data });
      })
      .catch((e) => console.log(e.message))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    return (
      <div>
        <h2>Trading today</h2>
        {this.state.isLoading && <p>Loading...</p>}
        <MovieList
          pathname={this.props.location.pathname}
          items={this.state.trading}
        />
      </div>
    );
  }
}
HomePage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};
export default HomePage;
