import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//Pages
import Home from './pages/Home';
import SignUp from './components/Form/Form';
import Pricing from './components/Pricing/Pricing';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/pricing" exact component={Pricing} />
			</Switch>
		</Router>
	);
}

export default App;
