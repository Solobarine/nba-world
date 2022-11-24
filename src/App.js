import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import CellInfo from './components/CellInfo';
import { getTeams } from './features/nba/nbaReducer';
import Home from './pages/Home';
import AllNbaTeams from './pages/AllNbaTeams';
import AtlanticPage from './pages/AtlanticPage';
import CentralPage from './pages/CentralPage';
import NorthWestPage from './pages/NorthWestPage';
import PacificPage from './pages/PacificPage';
import SouthEastPage from './pages/SouthEastPage';
import SouthWestPage from './pages/SouthWestPage';

const App = () => {
  const teams = useSelector((store) => store);
  const status = useSelector((store) => store.status);
  const dispatch = useDispatch();
  console.log(teams, status)

  useEffect(() => {
    dispatch(getTeams);
  }, []);
  const showTeams = () => {
    if (status === 'pending') {
      return <div className="loading">Loading, Please Wait...</div>
    }
    if (status === 'rejected') {
      return <div className="rejected">Sorry, We could not get the teams.</div>
    } 
  }
  return (
    <div className="App">
      <CellInfo />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home/all" element={<AllNbaTeams/>} />
        <Route path="/home/atlantic" element={<AtlanticPage/>} />
        <Route path="/home/central" element={<CentralPage/>} />
        <Route path="/home/northwest" element={<NorthWestPage/>} />
        <Route path="/home/pacific" element={<PacificPage/>} />
        <Route path="/home/southeast" element={<SouthEastPage/>} />
        <Route path="/home/southwest" element={<SouthWestPage/>} />
      </Routes>
    </div>
  );
}

export default App;
