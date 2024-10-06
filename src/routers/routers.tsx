import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { pageRoutes } from "./page.routers";
import { routeGenerator } from "@/utils/routesGenerator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(pageRoutes),
  },
]);
