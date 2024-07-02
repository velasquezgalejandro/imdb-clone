import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OutletPage from './OutletPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OutletPage />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
