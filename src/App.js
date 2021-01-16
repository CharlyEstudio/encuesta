import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Routes
import routes from './config/routes';

// CSS's
import './App.css';

function App() {
  return (
      <Router>
          <Switch>
              {
                  routes.map((route, index) => (
                      <RouteWithSubRoutes key={index} {...route} />
                  ))
              }
          </Switch>
      </Router>
  );
}

function RouteWithSubRoutes(route) {
    return(
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => <route.component routes={route.routes} {...props} />}
        />
    );
}

export default App;
