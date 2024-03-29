import MainContainer from './MainContainer'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Body from "./Body"
import Browse from "./Browser"
import Play from "./Play"
import SignIn from "./auth/SignIn"
import SignUp from "./auth/SignUp"

const Wrapper = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainContainer />,
          children: [
            {
              path: "/",
              element: <Body  />
            },
            {
              path: "/Signin",
              element: <SignIn  />
            },
          ],
        },
        {
          path: "/Signup",
          element: <SignUp />
        },
        {
          path: "/browse",
          element: <Browse  />
        },
        {
          path: "/play",
          element: <Play  />
        },
        
      ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Wrapper