import Home from '../components/Home';
import Universities from '../components/nav/Universities';
import Asia from '../components/nav/Asia';
import Europe from '../components/nav/Europe';
import Advices from '../components/nav/Advices';

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
    title: 'Advices',
    path: '/advices',
    element: <Advices />,
    // icon: <HomeIcon />,
  },
];
