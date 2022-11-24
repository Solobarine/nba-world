import { Link } from 'react-router-dom';

const NbaTeams = () => { //eslint-disable-line
  return (
    <div className="all">
      <Link to="/home/all"><i className="fa-solid fa-arrow-right-long"/></Link>
      <h2 className="all-teams">All NBA Teams</h2>
    </div>
  );
};

export default NbaTeams;
