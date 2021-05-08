import { Component } from "react";
import PropTypes from "prop-types";

class Container extends Component {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

Container.propTypes = {
  children: PropTypes.object,
};

export default Container;
