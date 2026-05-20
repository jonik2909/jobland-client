import { Route, Routes } from "react-router";
import HomePage from "./screens/homePage";
import JobsPage from "./screens/jobsPage";
import CompaniesPage from "./screens/companiesPage";
import CandidatesPage from "./screens/candidatesPage";
import JoinPage from "./screens/joinPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MyPage from "./screens/myPage";
import AdminDashboard from "./screens/adminDashboard";
import MemberList from "./screens/adminDashboard/MemberList";
import CompanyDashboard from "./screens/companyDashboard";
import AllApplicants from "./screens/companyDashboard/AllApplicants";
import CompanyProfile from "./screens/companyDashboard/CompanyProfile";
import ManageJobs from "./screens/companyDashboard/ManageJobs";
import NewJob from "./screens/companyDashboard/NewJob";
import JobList from "./screens/adminDashboard/JobList";
import "./styles/index.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="jobs/*" element={<JobsPage />} />
        <Route path="companies/*" element={<CompaniesPage />} />
        <Route path="candidates/*" element={<CandidatesPage />} />
        <Route path="my-page" element={<MyPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="admin/dashboard" element={<AdminDashboard />}>
          <Route index element={<MemberList />} />
          <Route path="jobs" element={<JobList />} />
        </Route>
        <Route path="company/dashboard" element={<CompanyDashboard />}>
          <Route index element={<CompanyProfile />} />
          <Route path="new-job" element={<NewJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="all-applicants" element={<AllApplicants />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
