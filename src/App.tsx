import Layout from "./Layout";
import HomePage from "@/components/HomePage";
import NetworkLayer from "./components/NetworkLayer";

function App() {
  return (
    <Layout>
      <HomePage />
      <NetworkLayer />
    </Layout>
  );
}

export default App;
