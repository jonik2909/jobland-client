import { Stack, Box } from "@mui/material";
import JobCard from "../../components/card/JobCard";
import DetailHeader from "../../components/headers/DetailHeader";

export default function CompanyDetail() {
  return (
    <div className="company-detail">
      <DetailHeader isJob={false} />
      <Stack className="container">
        <Stack className="left">
          <Box className="info">
            <span>About Company</span>
            <p>
              This is a mock description about the company. The company provides
              a variety of IT and development services.
            </p>
          </Box>
          <Box className="related-job-box">
            <span className="title">4 jobs at TechCorp Inc.</span>
            <p className="desc">
              get acquainted with other jobs of the company.
            </p>
            <div className="wrapper">
              {/* <JobCard />
              <JobCard /> */}
            </div>
          </Box>
        </Stack>
        <Stack className="right">
          <Stack className="company-box">
            <Box className="company-info">
              <div className="detail">
                <strong>Company Name:</strong>
                <span>TechCorp Inc.</span>
              </div>

              <div className="detail">
                <strong>Company size:</strong>
                <span>100-500</span>
              </div>
              <div className="detail">
                <strong>Category</strong>
                <span>Development</span>
              </div>
              <div className="detail">
                <strong>Phone:</strong>
                <span>+998901234567</span>
              </div>

              <div className="detail">
                <strong>View:</strong>
                <span>120 views</span>
              </div>
            </Box>
            <button>TechCorp Inc.</button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
