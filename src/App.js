import React from 'react'
import './Components/style.css'
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router >
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
