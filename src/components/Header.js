import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <Link to="/"><i className="fa-solid fa-chevron-left"></i></Link>
      <div className="icons">
        <i className="fa-solid fa-microphone"></i>
        <i className="fa-solid fa-gear"></i>
      </div>
    </div>
  )
};

export default Header;
