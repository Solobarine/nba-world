import { Link } from 'react-router-dom';

const Header = (props) => {
  const route = props.route; // eslint-disable-line
  return (
    <div className="header">
      <Link to="/"><i className="fa-solid fa-chevron-left" /></Link>
      <p className="route">{route}</p>
      <div className="icons">
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </div>
  );
};

export default Header;
