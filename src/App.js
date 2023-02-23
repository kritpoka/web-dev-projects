import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Style";
import { Projects } from "./components/Projects";
import  Cardtable  from "./components/Comunity";
import { Footer } from "./components/Footer";
import Test from "./components/test";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
