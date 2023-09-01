import './App.css';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectPage.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
