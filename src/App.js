import logo from './logo.svg';
import './App.css';

// Import Pages
import Home from './pages/Home';

// Import Componets
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
