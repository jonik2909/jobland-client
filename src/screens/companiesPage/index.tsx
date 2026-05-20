import { Route, Routes } from "react-router";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";

const CompaniesPage = () => {
  return (
    <div className="company-page">
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/:companyId" element={<CompanyDetail />} />
      </Routes>
    </div>
  );
};

export default CompaniesPage;
