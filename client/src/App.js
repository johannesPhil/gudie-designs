import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Admin from "./domains/Admin";
import Client from "./domains/Client";
import "tailwindcss/tailwind.css";
function App() {
	const subDomain = window.location.host.split(".")[0];
	return (
		<Router>
			{subDomain === "sub" ? (
				<Route component={Admin} />
			) : (
				<Route component={Client} />
			)}
		</Router>
	);
}

export default App;
