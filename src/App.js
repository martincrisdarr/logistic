import About from "./components/AboutUs/About";
import Home from "./components/Home/Home";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
