import './App.css';
import HomePage from './Pages/HomePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuessPage from './Pages/GuessPage';
import GamePage from './Pages/GamePage';
import GamePage2 from './Pages/GamePage2';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guess" element={<GuessPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/gamep2" element={<GamePage2 />} />
          {/* <Route path="/edit/:id" element={<EditUserPage />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
