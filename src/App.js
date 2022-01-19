
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
   
    
     

    <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/user" element={<UserPorfolio/>}/>
  </Routes>
  </div>
    </BrowserRouter>
  );
}

export default App;
