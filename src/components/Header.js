import { Link } from "react-router-dom";

const Header = (props) => {
  const route = props.route;
  return (
    <div className="header">
      <Link to="/"><i className="fa-solid fa-chevron-left"></i></Link>
      <p className="route">{route}</p>
      <div className="icons">
        <i className="fa-solid fa-microphone"></i>
        <i className="fa-solid fa-gear"></i>
      </div>
    </div>
  )
};

export default Header;
