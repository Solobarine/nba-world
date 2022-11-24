import { Link } from "react-router-dom";

const NorthWestTeams = () => {

  return (
    <div className="northwest">
      <Link to="/home/northwest"><i className="fa-solid fa-arrow-right-long"></i></Link>
      <h2 className="c-title">NorthWest Division Teams</h2>
    </div>
  )
};

export default NorthWestTeams;
