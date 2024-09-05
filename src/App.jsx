import './App.css';
import LandingPage from './pages/LandingPage.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
