import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, GamePage, GiveAnswerPage, CorrectPage, IncorrectPage, GuessCodePage, FinalPage, InitialPage } from './Pages'

//TODO
// features:
//LOCAL STORAGE anti reload (careful on platform; chrome etc..)
// fix clicking solved questions 
// add checking logic for final answer
// randomize icons not to crowd the physical medical departments
// graphic adjustmens and animations
// add error page redirecting to home page
//improvements:
// finish styling the buttons for previous and next etc
// fix correct and incorrect pages for pc
// add multiple correct or wrong messages like in french.
// finish what is the code word we're looking for page
// add more game types
// drag doesn't work on pc
// the chick page has some different greentext on the correct page. check how to change it 
//useMemo on pages useCallback on handlers should improve performance

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
