import { Route, Routes } from "react-router";
import JobList from "./JobList";
import JobDetail from "./JobDetail";

const JobsPage = () => {
  return (
    <div className="job-page">
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/:jobId" element={<JobDetail />} />
      </Routes>
    </div>
  );
};

export default JobsPage;
