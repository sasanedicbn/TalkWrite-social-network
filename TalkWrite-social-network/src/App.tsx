
import './App.css';
import LogIn from './pages/LogIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
