// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textare from './components/Textare'
// import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar title = "BrainBridge" aboutUs = "About BB"/>
    <div className="container">
    <Textare/>
    </div>
   
    </>
    
  );
}

export default App;
