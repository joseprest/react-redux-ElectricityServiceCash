import React from 'react';
import loadable from '@loadable/component';
import Splash from '../pages/Splash';

const routes = [
    {
        path: '/',
        key: 'ROOT',
        layout: 'Layout1', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Home'), {
            fallback: <Splash />
        })
    },
    {
        path: '/auth/register',
        key: 'ROOT',
        layout: 'Layout1', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Auth'), {
            fallback: <Splash />
        })
    },
    {
        path: '/auth/login',
        key: 'ROOT',
        layout: 'Layout1', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Auth'), {
            fallback: <Splash />
        })
    },
    {
        path: '/about',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/About'), {
            fallback: <Splash />
        })
    },
    {
        path: '/product',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Product'), {
            fallback: <Splash />
        })
    },
    {
        path: '/network',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Network'), {
            fallback: <Splash />
        })
    },
    {
        path: '/support',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Support'), {
            fallback: <Splash />
        })
    },
    {
        path: '/profile',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Profile'), {
            fallback: <Splash />
        })
    },
    {
        path: '/profile2/:tab?',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Profile1'), {
            fallback: <Splash />
        })
    },
    {
        path: '/newsroom',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Newsroom'), {
            fallback: <Splash />
        })
    },
    {
        path: '/faq',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Faq'), {
            fallback: <Splash />
        })
    },
    {
        path: '/splash',
        key: 'ROOT',
        layout: 'Layout1', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Splash'), {
            fallback: <Splash />
        })
    },
    {
        path: '/notfound',
        key: 'ROOT',
        layout: 'Layout1', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Notfound'), {
            fallback: <Splash />
        })
    },
];

export default routes;
