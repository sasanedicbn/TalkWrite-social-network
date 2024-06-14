
import './App.css';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/home',
    element: <Home/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
