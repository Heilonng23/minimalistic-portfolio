import "./App.css";
import { Experience } from "./components/Experience";
import { MainStack } from "./components/MainStack";
import { Projects } from "./components/Projects";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div className="main-stuff">
        <MainContent />
        <Experience />
        <Projects />
        {/* <Education/> */}
      </div>
    </div>
  );
}
function MainContent() {
  return (
    <div className="main-content">
      <header id="about-me">
        <p className="header">hi, my name is Ibragim </p>
        <p style={{ fontSize: "26px" }}>i&apos;m a software developer</p>
        <p style={{ fontSize: "26px" }}>and i use </p>
        <MainStack />
      </header>
    </div>
  );
}
export default App;
