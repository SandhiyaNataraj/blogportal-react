import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar/Topbar';
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
    </div>
  );
}
export default App;