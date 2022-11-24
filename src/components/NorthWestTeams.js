import { Link } from "react-router-dom";

const NorthWestTeams = () => {

  return (
    <div className="northwest">
      <Link to="/home/northwest"><i class="fa-solid fa-arrow-right-long"></i></Link>
      <h2 className="nw-teams">NorthWest Division Teams</h2>
    </div>
  )
};

export default NorthWestTeams;
