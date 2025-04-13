import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeMain from './components/HomePageComponent/HomeMain';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<HomeMain />} />
    </Routes>
  );
}

export default App;
