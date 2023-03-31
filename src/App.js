import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, GamePage, GiveAnswerPage, CorrectPage, IncorrectPage, GuessCodePage, FinalPage } from './Pages'

//TODO
//splash screen to select languages
//implement create-browser-router and localization for string translations

// add modal on homepage that says correct when user clicks on already solved qstn
// finish what is the code word we're looking for page
// add checking logic for final answer
// code final congratulations page
//LOCAL STORAGE anti reload (careful on platform; chrome etc..)
// Welcome screen before HomePage to select language; translate qstns / answers
// randomize icons not to crowd the physical medical departments
// graphic adjustmens and animations
// add more game types
// think about saving state against reload
// make it pc friendly by placing it all in a grid and the grid in the center
// hosting
//useMemo on pages useCallback on handlers

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
          <Route path="/correct" element={<CorrectPage />} />
          <Route path="/incorrect" element={< IncorrectPage />} />
          <Route path="/finalpage" element={<FinalPage />} />

          {/* <Route path="/edit/:id" element={<EditUserPage />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
