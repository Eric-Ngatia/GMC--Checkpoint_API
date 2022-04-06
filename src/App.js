import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Details from './Components/Pages/Details';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={ <Details/> } />
    </Routes>
    </div>
  );
}

export default App;
