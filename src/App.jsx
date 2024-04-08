import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import CoderCardLists from "./components/CoderCardLists";
import CoderProfile from "./components/CoderProfile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { UserProvider } from "./contexts/UserContext";
import CreateProfile from "./components/CreateProfile";
import ChatPage from "./components/ChatPage";

const AppLayout = () => {
  return (
    <UserProvider>
      <Header/>
      <Outlet/>
    </UserProvider>
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
            path:"/profile/:userId",
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
          {
            path:"/createProfile",
            element:<CreateProfile/>
          },
          {
            path:"/chat/:userIds", 
            element:<ChatPage/> 
          },
          {
            path:"/chat", 
            element:<ChatPage/> 
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
