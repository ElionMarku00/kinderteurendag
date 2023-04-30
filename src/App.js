import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, GamePage, GiveAnswerPage, CorrectPage, IncorrectPage, GuessCodePage, FinalPage, InitialPage } from './Pages'

//TODO

// more measuring metrics for {when the game is left} and game runtime. 

// features:
// graphic adjustmens and animations
// add error page redirecting to home page when invalid link

// improvements:
// fix correct and incorrect pages for pc
// drag doesn't work on pc and it glitches on iphones
// useMemo on pages useCallback on handlers should improve performance

// add a store on homepage letters 

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/home" element={<HomePage />} />
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
    </div>
  );
}

export default App;
