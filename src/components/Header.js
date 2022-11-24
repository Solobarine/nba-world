import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <i class="fa-solid fa-chevron-left"><Link to="/"></Link></i>
      <p className="route">add</p>
      <div className="icons">
        <i class="fa-solid fa-microphone"></i>
        <i class="fa-solid fa-gear"></i>
      </div>
    </div>
  )
};

export default Header;
