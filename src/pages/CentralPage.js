import {useSelector} from 'react-redux';
import CentralTeams from '../components/CentralTeams';
import Header from '../components/Header';
import Teams from '../components/Teams';

const CentralPage = () => {
  const store = useSelector((store) => store.teams.teams.data)
  const centralTeams = store.filter((team) => team.division === 'Central')
  return (
    <div className="centralPage">
      <Header />
      <CentralTeams />
      <Teams teams={centralTeams} />
    </div>
  )
};

export default CentralPage;
