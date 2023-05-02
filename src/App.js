import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/nav/nav";
import { Form } from "./components/form/Form";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="flex align-center justify-center h100vh">
        <Form />
      </div>
    </div>
  );
}

export default App;
