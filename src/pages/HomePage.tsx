import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div>HomePage</div>
      <button>Click me</button>
      <Footer/>
    </div>
  );
};
export default HomePage;
