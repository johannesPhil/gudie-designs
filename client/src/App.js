import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminIndex from "./domains/AdminIndex";
import Client from "./domains/Client";
import "tailwindcss/tailwind.css";
function App() {
	const subDomain = window.location.host.split(".")[0];
	return (
		<Router>
			<Switch>
				{subDomain === "sub" ? (
					<Route component={AdminIndex} />
				) : (
					<Route component={Client} />
				)}
			</Switch>
		</Router>
	);
}

export default App;
