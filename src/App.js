import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Addblog from './components/Addblog';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
       <Route path={'/'} element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
