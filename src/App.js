import './App.css';
import HomePage from './Pages/HomePage';
import Abc from '@mui/icons-material/Abc';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuessPage from './Pages/GuessPage';
import GamePage from './Pages/GamePage';
import GiveAnswerPage from './Pages/GiveAnswerPage';
import CorrectPage from './Pages/CorrectPage';
import IncorrectPage from './Pages/IncorrectPage';


//if correct change state of data.answered to true

// change state of data so it shows letters 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guess" element={<GuessPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/gamep2" element={<GiveAnswerPage />} />
          <Route path="/correct" element={<CorrectPage />} />
          <Route path="/incorrect" element={< IncorrectPage Icon={Abc} />} />

          {/* <Route path="/edit/:id" element={<EditUserPage />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
