import { Router } from "./Routes/Routes";
import "./App.css";
import { AdminLogin } from "./Components/AdminLogin";
import { Contest } from "./Components/Contest";
import { NavBar } from "./Components/NavBar";
import { StudentForm } from "./Components/StudentForm";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
