import { Link } from "react-router-dom";
const MovieList = ({ items, query, pathname }) => {
  return (
    <ul>
      {items.map((el) => {
        return (
          <li key={el.id}>
            <Link
              to={{
                pathname: `/movies/${el.id}`,
                state: {
                  query,
                  pathname,
                },
              }}
            >
              {el.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
