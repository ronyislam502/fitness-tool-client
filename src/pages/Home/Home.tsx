import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Category from "./components/Category";
import FeatureProducts from "./components/FeatureProducts";
import Gallery from "./components/Gallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FeatureProducts />
      <Benefits />
      <Gallery />
    </div>
  );
};

export default Home;
