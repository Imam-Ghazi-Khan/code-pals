import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import CoderCardLists from "./components/CoderCardLists";
import CoderProfile from "./components/CoderProfile";

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
      ],
  },
]);


function App() {
  return (
      <RouterProvider router={appRouter}/>
  )
}

export default App;
