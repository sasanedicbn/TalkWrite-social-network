
import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store/store';

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
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
