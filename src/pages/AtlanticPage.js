import {useSelector} from "react-redux";
import AtlanticTeams from "../components/AtlanticTeams";
import Header from '../components/Header';
import Teams from "../components/Teams";
const AtlanticPage = () => {
  const store = useSelector((store) => store.teams.teams.data);
  const atlanticTeams = store.filter((team) => team.division === 'Atlantic')
  return (
    <div className="atlanticPage">
      <Header />
      <AtlanticTeams />
      <Teams teams={atlanticTeams} />
    </div>
  )
};

export default AtlanticPage;
