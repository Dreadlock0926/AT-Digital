import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import hero from "./assets/hero.jpg";
import "./App.css";
import ConsultationButton from "./components/ConsultationButton";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-body">
        <div className="hero">
          <div className="consultation-tab">
            <h1>
              We crush your competitors, goals, and sales records - without the
              B.S.
            </h1>
            <ConsultationButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
