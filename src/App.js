import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Scoresheet from './pages/Scoresheet';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='first' element={<Scoresheet type={'first'} />} />
          <Route path='second' element={<Scoresheet type={'second'} />} />
          <Route path='third' element={<Scoresheet type={'third'} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
