import { useSelector } from 'react-redux';
import SouthWestTeams from '../components/SouthWestTeams';
import Header from '../components/Header';
import Teams from '../components/Teams';

const SouthWestPage = () => {
  const store = useSelector((store) => store.teams.teams.data);
  const southWestTeams = store.filter((team) => team.division === 'Southwest');
  const route = '/home/southwest';

  return (
    <div className="southWestPage">
      <Header route={route} />
      <SouthWestTeams />
      <Teams teams={southWestTeams} />
    </div>
  );
};

export default SouthWestPage;
