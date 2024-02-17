
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container">
    <Textform heading="Enter text for Analize"/>
    </div>
    
    </>
  );
}

export default App;
