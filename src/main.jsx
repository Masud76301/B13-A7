import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import HomePage from './pages/HomePage';
import TimeLinePage from './pages/TimeLinePage';
import StatsPage from './pages/StatsPage';
import RootPage from './pages/RootPage';
import FriendsDetails from './component/FriendsDetails/FriendsDetails';
import FriendProvider from './context/FriendProvider';
import ErrorPage from './pages/ErrorPage';
import { ToastContainer} from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/friendsDetails/:id",
        element: <FriendsDetails></FriendsDetails>,
        loader: () => fetch('/friendsData.json'),
      },
      {
        path: '/timeline',
        element: <TimeLinePage></TimeLinePage>
      },
      {
        path: '/stats',
        element: <StatsPage></StatsPage>
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </FriendProvider>
  </StrictMode>,
)
