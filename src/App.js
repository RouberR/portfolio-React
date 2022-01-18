
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { UserPorfolio } from './pages/UserPorfolio';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
     <Header/>
     {/* <Home/> */}
     <UserPorfolio/>
    </div>
    <Routes>
    
  </Routes>
    </BrowserRouter>
  );
}

export default App;
