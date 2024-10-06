import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
// import useBeforeUnload from "./hook/useBeforeUnload";
// import { useAppSelector } from "./redux/hooks";

const App = () => {
  // const cart = useAppSelector((state) => state.cart);
  // const shouldWarn = cart.length > 0;

  // useBeforeUnload(
  //   shouldWarn,
  //   "You have items in your cart. Are you sure you want to leave without checking out?"
  // );

  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default App;
