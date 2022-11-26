import { useSelector } from 'react-redux';
import PacificTeams from '../components/PacificTeams';
import Header from '../components/Header';
import Teams from '../components/Teams';

const PacificPage = () => {
  const store = useSelector((store) => store.teams.teams.data);
  const pacificTeams = store.filter((team) => team.division === 'Pacific');
  const route = '/home/pacific';

  return (
    <div className="pacificPage">
      <Header route={route} />
      <PacificTeams />
      <Teams teams={pacificTeams} />
    </div>
  );
};

export default PacificPage;
