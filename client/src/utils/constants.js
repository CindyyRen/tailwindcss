import Home from '../components/Home';
import Universities from '../components/nav/Universities';
import Companies from '../components/Companies';

export const navItems = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    element: <Home />,
    // icon: <HomeIcon />,
  },
  {
    id: 2,
    title: 'Universities',
    path: '/universities',
    element: <Universities />,
    // children: [
    //   {
    //     id: 21,
    //     title: 'Asia-universities',
    //     path: '/universities/asia',
    //     element: <Asia />,
    //   },
    //   {
    //     id: 22,
    //     title: 'Europe-universities',
    //     path: '/universities/europe',
    //     element: <Europe />,
    //   },
    // ],
  },
  {
    id: 3,
    title: 'Companies',
    path: '/Companies',
    element: <Companies />,
    // icon: <HomeIcon />,
  },
];
