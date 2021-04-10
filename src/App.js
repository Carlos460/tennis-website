import logo from './logo.svg';
import './App.css';

// Import Pages
import Home from './pages/Home';

// Import Componets
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
