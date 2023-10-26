import "./App.css";
import Navbar from "./layout/navbar/Navbar";
import Home from "./pages/home/Home";
import TopButton from "./components/topButton/TopButton";

function App() {
  return (
    <div>
      <TopButton />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
