import {useSelector} from 'react-redux';
import AtlanticTeams from '../components/AtlanticTeams';
import Header from '../components/Header';
import Teams from '../components/Teams';
import './css/AtlanticPage.css';

const AtlanticPage = () => {
  const store = useSelector((store) => store.teams.teams.data);
  const atlanticTeams = store.filter((team) => team.division === 'Atlantic');
  const route = '/home/atlantic';

  return (
    <div className="atlanticPage">
      <Header route={route} />
      <AtlanticTeams />
      <Teams teams={atlanticTeams} />
    </div>
  );
};

export default AtlanticPage;
