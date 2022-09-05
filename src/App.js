import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <main>
        <Container>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </main>
    </div>
  );
}

export default App;
