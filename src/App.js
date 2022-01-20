
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { UserPorfolio } from './pages/UserPorfolio';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from './fb';
import { CreatePage } from './pages/CreatePage';
function App() {
  const currentUser = useAuth()
  console.log(currentUser)
  return (
    <BrowserRouter>
    <div className="App">
  
     <Header/>
   
    
     

    <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path={currentUser && `${currentUser.uid}`} element={<UserPorfolio/>}/>
    <Route path={currentUser && `${currentUser.uid}/create`} element={<CreatePage/>}/>
  </Routes>
  </div>
    </BrowserRouter>
  );
}

export default App;
