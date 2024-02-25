import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import CodePalsList from "./components/CodersList"
import Header from "./components/Header"
import About from "./components/About";

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
              element:<CodePalsList/>
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
