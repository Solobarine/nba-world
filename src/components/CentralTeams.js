import { Link } from "react-router-dom";

const CentralTeams = () => {

  return(
    <div className="central">
      <Link to="/home/central"><i className="fa-solid fa-arrow-right-long"></i></Link>
      <h2 className="c-teams">Central Division Teams</h2>
    </div>
  )
};

export default CentralTeams;
