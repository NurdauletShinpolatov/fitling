import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "../routes/routes";

export default function RouteProvider() {
  const router = createBrowserRouter(routes);

  return (
      <RouterProvider router={router} />
  );
}
