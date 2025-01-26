import Layout from "../layout/layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
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
