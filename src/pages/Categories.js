import AtlanticTeams from '../components/AtlanticTeams';
import CentralTeams from '../components/CentralTeams';
import NorthWestTeams from '../components/NorthWestTeams';
import PacificTeams from '../components/PacificTeams';
import SouthEastTeams from '../components/SouthEastTeams';
import SouthWestTeams from '../components/SouthWestTeams';

const Categories = () => { // eslint-disable-line
  return (
    <div className="category">
      <AtlanticTeams />
      <CentralTeams />
      <NorthWestTeams />
      <PacificTeams />
      <SouthEastTeams />
      <SouthWestTeams />
    </div>
  );
};

export default Categories;
