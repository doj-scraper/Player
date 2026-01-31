import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background text-primary font-sans selection:bg-terminal-green selection:text-black">
        <NavBar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
