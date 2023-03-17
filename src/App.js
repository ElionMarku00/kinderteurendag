import './App.css';
import HomePage from './Pages/HomePage';
import Abc from '@mui/icons-material/Abc';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuessPage from './Pages/GuessPage';
import GamePage from './Pages/GamePage';
import GiveAnswerPage from './Pages/GiveAnswerPage';
import CorrectPage from './Pages/CorrectPage';
import IncorrectPage from './Pages/IncorrectPage';


// add overflow rules in homepage
//replace placeholder images
// Welcome screen before HomePage to select language; translate qstns / answers
// randomize data
// finish incorrect page
// replace placeholder icons
// graphic adjustmens and animations
// create what is the code word we're looking for page
// add more games not just text guessing
// think about saving state against reload
// hosting

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
