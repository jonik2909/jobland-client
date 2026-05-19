import { Container } from "@mui/material";
import { NavLink, Route, Routes } from "react-router";
import HomePage from "./screens/homePage";
import JobsPage from "./screens/jobsPage";
import CompaniesPage from "./screens/companiesPage";
import CandidatesPage from "./screens/candidatesPage";
import JoinPage from "./screens/joinPage";
import "./styles/index.scss";

function App() {
  return (
    <Container>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/jobs">Jobs Page</NavLink>
      </div>
      <div>
        <NavLink to="/companies">Companies Page</NavLink>
      </div>
      <div>
        <NavLink to="/candidates">Candidates Page</NavLink>
      </div>

      <div>
        <NavLink to="/join">Join Page</NavLink>
      </div>

      <br />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="companies" element={<CompaniesPage />} />
        <Route path="candidates" element={<CandidatesPage />} />
        <Route path="join" element={<JoinPage />} />
      </Routes>
    </Container>
  );
}

export default App;

// Screen Component & Sectional Component & Common Component
