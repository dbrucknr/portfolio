import Header from "./Header";
import Footer from "./Footer";
import { useRoutes } from "react-router-dom";
import AppRoutes from "../router/routes"

const App = () => {
  let renderedComponent = useRoutes(AppRoutes);
  return (
    <div className="App">
      <Header />
        { renderedComponent }
      <Footer />
    </div>
  );
}

export default App;
