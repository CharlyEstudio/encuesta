import {Route} from "react-router-dom";

function LoadRoutes({routes}) {
    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ));
}

export default LoadRoutes;
