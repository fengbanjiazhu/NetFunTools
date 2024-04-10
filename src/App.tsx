import Layout from "./Layout";
import HomePage from "@/components/HomePage";
import NetworkLayer from "./components/NetworkLayer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<NetworkLayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
