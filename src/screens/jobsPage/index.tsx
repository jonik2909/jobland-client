import { Routes, Route } from "react-router";
import JobList from "./JobList";
import JobDetail from "./JobDetail";

export default function JobPage() {
  return (
    <div className="job-page">
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/:jobId" element={<JobDetail />} />
      </Routes>
    </div>
  );
}
