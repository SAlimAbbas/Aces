import './App.css';
import MainRoutes from './components/MainRoutes/MainRoutes';
import logo from './logo.svg';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
