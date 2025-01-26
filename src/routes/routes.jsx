import App from "../App";

const routes = [
  {
    path: "/",
    element: <App />,
    id: "root",
    children: [
      // {
      //   path: "/search",
      //   id: "search",
      //   element: <Search />,
      // },
      // {
      //   path: "/basket",
      //   id: "basket",
      //   element: <Basket />,
      // },
      // {
      //   path: "/profile",
      //   id: "profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "/book/:id",
      //   id: "book",
      //   element: <Book />,
      // },
    ],
  },
];

export default routes;
