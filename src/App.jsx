import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import MealDetails from "./Components/MealDetails/MealDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SpecificCategory from "./Components/SpecificCategory/SpecificCategory";

function App() {
  const queryClient = new QueryClient();

  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/mealDetails/:id", element: <MealDetails /> },
        { path: "/specificCategory/:category", element: <SpecificCategory /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
