// Layouts
import { LayoutAdmin, LayoutBasic } from '../Layouts';

// Admin Pages
import { Admin as AdminHome, SignIn as AdminSignIn } from '../Pages/Admin';

// Basic Pages
import { Home, Contact } from '../Pages';

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
    },
    {
        path: '/',
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/contact',
                component: Contact,
                exact: true
            }
        ]
    }
];

export default routes;
