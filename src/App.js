import './App.css';
import Navbar from './container/navbar/Navbar';
import Frameone from "./container/Frameone/Frameone"
import FrameTwo from './container/FrameTwo/FrameTwo';
import FrameThree from './container/FrameThree/FrameThree'
import FrameFour from './container/FranmeFour/FrameFour';
import Footer from "./container/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app__frameone">
        <Frameone />
      </div>
      <div className="app__frameTwo">
        <FrameTwo />
      </div>
      <div className="app__frameThree">
        <FrameThree />
      </div>
      <div className="app__frameFour">
        <FrameFour />
      </div>
      <footer className="app__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
