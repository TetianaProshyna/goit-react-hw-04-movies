import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import img from "../../img/no-img.jpg";

const MovieList = ({ items, query, pathname }) => {
  return (
    <ul className="previewList">
      {items.map((el) => {
        return (
          <li className="previewItem" key={el.id}>
            <Link
              className="previewLink"
              to={{
                pathname: `/movies/${el.id}`,
                state: {
                  query,
                  pathname,
                },
              }}
            >
              <div className="wrapper">
                <img
                  className="previewImg"
                  src={
                    el.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${el.poster_path}`
                      : img
                  }
                  alt=""
                />
                <h3>{el.title}</h3>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  items: PropTypes.array,
  query: PropTypes.string,
  pathname: PropTypes.string,
};
export default MovieList;
