import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router";
import './index.css'
import HomePage from './pages/HomePage';
import TimeLinePage from './pages/TimeLinePage';
import StatsPage from './pages/StatsPage';
import RootPage from './pages/RootPage';
import FriendsDetails from './component/FriendsDetails/FriendsDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    children:[
      {
        index:true,
        element:<HomePage></HomePage>
      },
      {
        path:"/friendsDetails/:id",
        element:<FriendsDetails></FriendsDetails>,
        loader:()=> fetch('/friendsData.json'),
      },
      {
        path:'/timeline',
        element:<TimeLinePage></TimeLinePage>
      },
      {
        path:'/stats',
        element:<StatsPage></StatsPage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
