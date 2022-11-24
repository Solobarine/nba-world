import { useSelector } from "react-redux";
import SouthEastTeams from "../components/SouthEastTeams";
import Header from '../components/Header';
import Teams from "../components/Teams";

const SouthEastPage = () => {
  const store = useSelector((store) => store.teams.teams.data);
  const southEastTeams = store.filter((team) => team.division === 'Southeast');
  const route = '/home/southeast';

  return (
    <div className="southEastPage">
      <Header route={route} />
      <SouthEastTeams />
      <Teams teams={southEastTeams} />
    </div>
  )
};

export default SouthEastPage;
