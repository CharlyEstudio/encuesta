// Layouts
import { LayoutAdmin } from "../Layouts";

// Admin Pages
import { Admin as AdminHome, SignIn as AdminSignIn } from "../Pages/Admin";

const routes = [
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true
            },
            {
                path: '/admin/login',
                component: AdminSignIn,
                exact: true
            }
        ]
    }
];

export default routes;
