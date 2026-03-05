import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import User from './pages/User';
import UserDetail, { loader as getUserDetail } from './pages/UserDetail';
import AppLayout from './pages/AppLayout';
import Error from './components/Error';
import { getEveryUser } from './services/apiUsers';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/router-new/', element: <Home />, loader: async () => {} },
      { path: '/router-new/user', element: <User />, loader: getEveryUser },
      {
        path: '/router-new/user/:id',
        element: <UserDetail />,
        loader: getUserDetail,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
