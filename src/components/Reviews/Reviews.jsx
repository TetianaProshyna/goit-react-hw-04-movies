import React, { Component } from "react";
import PropTypes from "prop-types";
import ApiService from "../../services/ApiService/ApiService";
const apiService = new ApiService();

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const id = this.props.match.params.movieId;
    apiService.getMovieReviews(id).then((data) =>
      this.setState({
        reviews: data,
      })
    );
  };
  render() {
    return (
      <>
        <ul className="reviewsList">
          {this.state.reviews.map(({ id, author, content }) => (
            <li className="reviewsItem" key={id}>
              <p className="reviewAuthor">Author: {author}</p>
              <p className="reviewsText">{content}</p>
            </li>
          ))}
        </ul>
        {this.state.reviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}
      </>
    );
  }
}
Reviews.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

export default Reviews;
