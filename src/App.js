import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Shop from './pages/Shop';

// Import Componets
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
