import {useSelector} from 'react-redux';
import AtlanticTeams from '../components/AtlanticTeams';
import CentralTeams from '../components/CentralTeams';
import NorthWestTeams from '../components/NorthWestTeams';
import PacificTeams from '../components/PacificTeams';
import SouthEastTeams from '../components/SouthEastTeams';
import SouthWestTeams from '../components/SouthWestTeams';


const Categories = () => {
  const store = useSelector((store) => store.teams);
  const status = useSelector((store) => store.status);

  return(
    <div className="category">
      <AtlanticTeams />
      <CentralTeams />
      <NorthWestTeams />
      <PacificTeams />
      <SouthEastTeams />
      <SouthWestTeams />
    </div>
  )
};

export default Categories;
