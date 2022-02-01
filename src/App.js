import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <GlobalStyle />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/signup' element={<SignUp/>} />
            <Route exact path='/pricing' element={<Pricing/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
