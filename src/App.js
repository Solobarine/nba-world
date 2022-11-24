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
import './App.css';

const App = () => {
  const status = useSelector((store) => store.teams.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getTeams());
    }
  }, []);

  return (
    <div className="App">
      <CellInfo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/all" element={<AllNbaTeams />} />
        <Route path="/home/atlantic" element={<AtlanticPage />} />
        <Route path="/home/central" element={<CentralPage />} />
        <Route path="/home/northwest" element={<NorthWestPage />} />
        <Route path="/home/pacific" element={<PacificPage />} />
        <Route path="/home/southeast" element={<SouthEastPage />} />
        <Route path="/home/southwest" element={<SouthWestPage />} />
      </Routes>
    </div>
  );
};

export default App;
