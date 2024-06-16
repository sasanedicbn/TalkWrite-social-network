
import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store/store';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/home',
    element:
    <ProtectedRoute>
      <Home/>
    </ProtectedRoute>,
  }
]);
// protectedrouter zamotom home i ako ima token home me posalji ako nema login da idem samo ta logika {children }
function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
