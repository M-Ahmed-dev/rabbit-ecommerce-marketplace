import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />}></Route>
          {/* User layout */}
        </Route>
        <Route>{/* Admin layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
