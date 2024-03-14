import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import CoderCardLists from "./components/CoderCardLists";
import CoderProfile from "./components/CoderProfile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const AppLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<AppLayout/>,
      children:[
          {
              path:"/",
              element:<CoderCardLists/>
          },
          {
            path:"/profile",
            element:<CoderProfile/>
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path:"/signUp",
            element:<SignUp/>
          },
      ],
  },
]);


function App() {
  return (
      <RouterProvider router={appRouter}/>
  )
}

export default App;
