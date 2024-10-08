import "./App.css";
import { useEffect } from "react";
import { Experience } from "./components/Experience";
import { MainStack } from "./components/MainStack";
import { Projects } from "./components/Projects";
import { Navbar } from "./components/Navbar";

function App() {
   useEffect(() => {
      // Google Tag (gtag.js)
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-0E90HKD6JE";
      script.async = true;
      document.head.appendChild(script);

      const gtagScript = document.createElement("script");
      gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0E90HKD6JE');
    `;
      document.head.appendChild(gtagScript);

      // Cleanup script when component unmounts
      return () => {
         document.head.removeChild(script);
         document.head.removeChild(gtagScript);
      };
   }, []);

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
            <Footer />
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

function Footer() {
   return (
      <div style={{ margin: "30px", textAlign: "center" }}>
         <p>&copy; no copyright for anything :)</p>
      </div>
   );
}

export default App;
