import './App.css';
import MainComponent from './components/MainComponent';
import Navbar from './components/Navbar';
import OrderDetails from './components/OderDetails';

function App() {
  return (
    <>
     <Navbar/>
      <OrderDetails/>
      <MainComponent/>
    </>
  );
}

export default App;
