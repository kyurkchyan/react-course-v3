import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingLoader } from "./pages/Landing";
import { loader as cocktailLoader } from "./pages/Cocktail";
import {
  HomeLayout,
  About,
  Cocktail,
  Error,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      { path: "about", element: <About /> },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: cocktailLoader,
        errorElement: <SinglePageError />,
      },
      { path: "newsletter", element: <Newsletter /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
