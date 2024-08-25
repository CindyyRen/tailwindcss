// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { navItems } from './utils/constants';
// import Asia from './components/nav/Asia';
// import Europe from './components/nav/Europe';

function App() {
  const renderRoutes = (items) => {
    return items.map((item) => (
      <Route key={item.id} path={item.path} element={item.element}>
        {item.children && renderRoutes(item.children)}
      </Route>
    ));
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Header /> */}
        <Routes>{renderRoutes(navItems)}</Routes>
      </div>
    </Router>
  );
}

export default App;
