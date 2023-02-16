import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';

function App() {
  return (
    <BrowserRouter>
      <routes>
        <Route path='/' element={<Accueil/>} />
      </routes>
    </BrowserRouter>

  );
}

export default App;
