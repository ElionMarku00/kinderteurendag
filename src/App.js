import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, GamePage, GiveAnswerPage, CorrectPage, IncorrectPage, GuessCodePage, FinalPage, InitialPage } from './Pages'

//TODO

// more measuring metrics for {when the game is left} and game runtime. 

// features:
// LOCAL STORAGE add playername
// add checking logic for final answer
// graphic adjustmens and animations
// add error page redirecting to home page when invalid link

// improvements:
// finish styling the buttons for previous and next etc
// fix correct and incorrect pages for pc
// finish what is the code word we're looking for page
// drag doesn't work on pc and it glitches on iphones
// useMemo on pages useCallback on handlers should improve performance

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
