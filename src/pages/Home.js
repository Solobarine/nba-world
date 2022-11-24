import Nba from '../components/Nba';
import Categories from './Categories';
import './css/Home.css';
const Home = () => {

  return(
    <div className="home-section">
      <Nba />
      <Categories />
    </div>
  )
}

export default Home;
