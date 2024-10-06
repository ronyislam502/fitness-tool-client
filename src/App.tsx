import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <div>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default App;
