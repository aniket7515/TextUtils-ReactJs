import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';



function App() {
  return (
    <>
      <Navbar title="TextUtils"></Navbar>
      <div className="container">
      <TextForm heading="Enter the text to Analyze "></TextForm>
      {/* <About/> */}

      </div>
      
    </>
  );

}

export default App;
