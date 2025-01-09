import './reset.css'
import "./App.module.scss";
import Header from './componentss/Header/Header';
import Main from './componentss/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentss/Footer/Footer';
import Game from './componentss/Game/Game';
import Politycs from './componentss/Politycs/Politycs';
import CookPage from './componentss/Cookies/Cookies';
import Security from './componentss/Security/Security';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/playgame" element={<Game />} />
        <Route path="/politics" element={<Politycs />} />
      </Routes>
      <Footer />
      <CookPage />
      <Security />
    </Router>
  )
}

export default App
