import { Link } from 'react-router-dom';

const NorthWestTeams = () => { // eslint-disable-lie
  return (
    <div className="northwest">
      <Link to="/home/northwest"><i className="fa-solid fa-arrow-right-long" /></Link>
      <h2 className="c-title">NorthWest Division Teams</h2>
    </div>
  );
};

export default NorthWestTeams;
