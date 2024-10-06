import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const About = () => {
  return (
    <div className="section-gap">
      <AboutUs />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default About;
