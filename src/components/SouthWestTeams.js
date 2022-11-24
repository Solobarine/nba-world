import { Link } from "react-router-dom";

const SouthWestTeams = () => {
  
  return (
    <div className="southwest">
      <Link to="/home/southwest"><i className="fa-solid fa-arrow-right-long"></i></Link>
      <h2 className="sw-title">SouthWest Division Teams</h2>
    </div>
  )
};

export default SouthWestTeams;
