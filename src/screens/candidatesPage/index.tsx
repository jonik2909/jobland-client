import { Route, Routes } from "react-router";
import CandidantDetail from "./CandidantDetail";
import CandidantList from "./CandidantList";

const CandidatesPage = () => {
  return (
    <div className="candidant-page">
      <Routes>
        <Route path="/" element={<CandidantList />} />
        <Route path="/:candidantId" element={<CandidantDetail />} />
      </Routes>
    </div>
  );
};

export default CandidatesPage;
