import React from 'react'
import Welcome from './components/welcome/Welcome';
import SignUp from './components/SignUp/SignUp';
import Login from './components/login/Login';
import Index from './pages/Home';
import ProfilePage from './components/Profile/ProfilePage';
import {BrowserRouter as Router , Route,Routes } from 'react-router-dom'
import Analytics from './components/services/Analytics';
function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Home' element={<Index />} />
      <Route path='/Profile' element={<ProfilePage />} />
      <Route path='/services/analytics' element={<Analytics />} />
    </Routes>
      
    </Router>
  );
}

export default App;
