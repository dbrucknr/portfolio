import Header from "./Header";
import Footer from "./Footer";
import { useRoutes } from "react-router-dom";
import AppRoutes from "../router/routes"
import "../css/app.css"

const App = () => {
  let renderedComponent = useRoutes(AppRoutes);
  return (
    <div className="App">
      <Header />
      <div className="container">
        { renderedComponent }
      </div>
      <Footer />
    </div>
  );
}

export default App;
