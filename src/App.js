import "./App.css";
import { AdminLogin } from "./Components/AdminLogin";
import { Contest } from "./Components/Contest";
import { NavBar } from "./Components/NavBar";
import { StudentForm } from "./Components/StudentForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <StudentForm />
      <AdminLogin />
      <Contest />
    </div>
  );
}

export default App;
