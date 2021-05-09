import { Component } from "react";
import PropTypes from "prop-types";
import img from "../../img/no-img.jpg";
import ApiService from "../../services/ApiService/ApiService";

const apiService = new ApiService();

class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    this.fetchCast();
  }
  fetchCast = () => {
    const { movieId } = this.props.match.params;
    apiService.getMovieCredits(movieId).then((data) => {
      data = data.map((el) => {
        if (el.profile_path) {
          el.profile_path = `https://image.tmdb.org/t/p/w500/${el.profile_path}`;
        }
        return { ...el };
      });
      this.setState({
        cast: data,
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };
  render() {
    return (
      <ul className="castList">
        {this.state.cast.map(({ id, profile_path, name, character }) => (
          <li className="castItem" key={id}>
            <img
              className="castImg"
              src={profile_path || img}
              alt="actor-card"
            />
            <div className="descr-wrapper">
              <p>{name}</p>
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
Cast.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

export default Cast;
