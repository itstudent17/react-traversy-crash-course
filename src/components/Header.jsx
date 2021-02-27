import Button from "./Button";
import { useLocation } from "react-router-dom";
// const headingStyle = { color: "red", backgroundColor: "black" };
const headingStyle = {};

const Header = ({ title, toggleAddTask, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          toggleAddTask={toggleAddTask}
        />
      )}
    </header>
  );
};

// Header.propTypes = {
//   title: PropTypes.string,
// };

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
