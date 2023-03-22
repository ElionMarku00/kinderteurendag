import './App.css';
import HomePage from './Pages/HomePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from './Pages/GamePage';
import GiveAnswerPage from './Pages/GiveAnswerPage';
import CorrectPage from './Pages/CorrectPage';
import IncorrectPage from './Pages/IncorrectPage';
import GuessCodePage from './Pages/GuessCodePage';
import FinalPage from './Pages/FinalPage';

//TODO

// draganddrop and multiple choice kind of games
// add modal on homepage that says correct when user clicks on already solved qstn
// finish what is the code word we're looking for page
// add checking logic for final answer
// code final congratulations page

// add props to each page for specific text on each page
// center the f title at homepage
// Welcome screen before HomePage to select language; translate qstns / answers
// randomize icons not to crowd the physical medical departments
// graphic adjustmens and animations
// add more games not just text guessing
// think about saving state against reload
// make it pc friendly by placing it all in a grid and the grid in the center
// hosting

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/guess" element={<GuessPage />} /> */}
          <Route path="/game" element={<GamePage />} />
          <Route path="/gamep2" element={<GiveAnswerPage />} />
          <Route path="/guesscode" element={<GuessCodePage />} />
          <Route path="/finalpage" element={<FinalPage />} />
          <Route path="/correct" element={<CorrectPage />} />
          <Route path="/incorrect" element={< IncorrectPage />} />

          {/* <Route path="/edit/:id" element={<EditUserPage />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
