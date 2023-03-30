import { useSelector } from 'react-redux';
import NorthWestTeams from '../components/NorthWestTeams';
import Header from '../components/Header';
import Teams from '../components/Teams';

const NorthWestPage = () => {
  const store = useSelector((store) => store.teams.teams.data);
  const northWestTeams = store.filter((team) => team.division === 'Northwest');
  const route = '/home/northwest';

  return (
    <div className="northWestPage team_view">
      <Header route={route} />
      <NorthWestTeams />
      <Teams teams={northWestTeams} />
    </div>
  );
};

export default NorthWestPage;
