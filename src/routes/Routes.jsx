import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Home";
import AddRecipes from "../pages/recipes/AddRecipes";
import AllRecipies from "../pages/recipes/AllRecipies";
import ProtectedRoutes from "./ProtectedRoutes";
import RecipeDetails from "../pages/recipes/RecipeDetails";
import AllCoin from "../pages/purchaseCoin/AllCoin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/recipies",
        element: <AllRecipies />,
      },
      {
        path: "/recipe/:id",
        element: (
          <ProtectedRoutes>
            <RecipeDetails />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/add-recipe",
        element: (
          <ProtectedRoutes>
            <AddRecipes />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/purchase-coins",
        element: (
          <ProtectedRoutes>
            <AllCoin />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
