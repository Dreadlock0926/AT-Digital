import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";
import content1 from "./assets/content1.png";
import content2 from "./assets/content2.png";
import GeneralButton from "./components/GeneralButton";
import QuestionContainer from "./components/QuestionContainer";

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
            <GeneralButton text={"Get free consultation"} />
          </div>
        </div>
        <div className="app-content">
          <div className="content">
            <img src={content1} alt="content1" />
            <div className="content-info">
              <h2>Web & mobile app development</h2>
              <p>
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <GeneralButton text={"Learn more"} />
            </div>
          </div>
          <div className="content">
            <img src={content2} alt="content2" />
            <div className="content-info">
              <h2>Digital Strategy Consulting</h2>
              <p>
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <GeneralButton text={"Learn more"} />
            </div>
          </div>
          <div className="faq">
            <h2>Frequently asked questions</h2>
            <QuestionContainer />
            <QuestionContainer />
            <QuestionContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
