
import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurCommunity from './pages/Community';
import Programs from './pages/Programs';
import Events from './pages/Events';

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/community' element={<OurCommunity />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Layout>
    </MemoryRouter>
  );
};

export default App;
