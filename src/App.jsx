import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import About from "./components/About";
import CoderCardLists from "./components/CoderCardLists";

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
              path:"/about",
              element: <About/>
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
