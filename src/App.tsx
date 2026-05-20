import { Route, Routes } from "react-router";
import HomePage from "./screens/homePage";
import JobsPage from "./screens/jobsPage";
import CompaniesPage from "./screens/companiesPage";
import CandidatesPage from "./screens/candidatesPage";
import JoinPage from "./screens/joinPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./styles/index.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="jobs/*" element={<JobsPage />} />
        <Route path="companies" element={<CompaniesPage />} />
        <Route path="candidates" element={<CandidatesPage />} />
        <Route path="join" element={<JoinPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
