import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
