import { Link } from "react-router-dom";

const NbaTeams = () => {

  return (
    <div className="all">
      <i class="fa-solid fa-arrow-right-long"><Link to="/home/all"></Link></i>
      <h2 className="all-teams">All NBA Teams</h2>
    </div>
  )
};

export default NbaTeams;
