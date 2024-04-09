import Layout from "./Layout";
import HomePage from "@/components/HomePage";
import NetworkLayer from "./components/NetworkLayer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tools",
    element: <NetworkLayer />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </Layout>
  );
}

export default App;
