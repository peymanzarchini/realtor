import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <header>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </header>
  );
}

export default App;
