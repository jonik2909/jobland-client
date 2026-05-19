import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink, Route, Routes } from "react-router";

function App() {
  return (
    <Container>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          About
        </NavLink>
      </div>
      <Routes>
        <Route index element={<div>Home Page</div>} />
        <Route path="about" element={<div>About Page</div>} />
      </Routes>
    </Container>
  );
}

export default App;
