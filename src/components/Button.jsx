import PropTypes from "prop-types";

const Button = ({ color, text, toggleAddTask }) => (
  <button
    style={{ backgroundColor: color }}
    className="btn"
    onClick={toggleAddTask}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
