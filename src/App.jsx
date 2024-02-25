import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import About from "./components/About";
import CodersList from "./components/CodersList";

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
              element:<CodersList/>
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
