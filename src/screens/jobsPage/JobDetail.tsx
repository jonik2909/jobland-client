import { Stack, Box, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import JobCard from "../../components/card/JobCard";
import { Link } from "react-router";
import DetailHeader from "../../components/headers/DetailHeader";

const relatedJobs = [1, 2, 3, 4];

export default function JobDetail() {
  return (
    <div className="job-detail">
      <DetailHeader isJob={true} />
      <Container className="container">
        <Stack className="left">
          <Box className="info">
            <span>Job Description</span>
            <p>
              This is a sample job description. You will be responsible for
              creating amazing React applications.
            </p>
          </Box>
          <Box className="info">
            <span>Key Responsibilities</span>
            <ul>
              <li>Write clean code</li>
              <li>Collaborate with the team</li>
            </ul>
          </Box>
          <Box className="info">
            <span>Skill & Experience</span>
            <ul>
              <li>3+ years of React</li>
              <li>TypeScript expertise</li>
            </ul>
          </Box>
          <Box className="share-box">
            <span>Share this job</span>
            <div className="btns">
              <button className="facebook">
                <FacebookIcon /> Facebook
              </button>
              <button className="twitter">
                <TwitterIcon /> Twitter
              </button>
              <button className="google">
                <GoogleIcon /> Google
              </button>
            </div>
          </Box>

          {relatedJobs.length > 0 && (
            <Box className="related-job-box">
              <span className="title">Related Jobs</span>
              <p className="desc">
                get acquainted with other jobs of the company.
              </p>
              <div className="wrapper">
                {relatedJobs.map(() => (
                  <JobCard />
                ))}
              </div>
            </Box>
          )}
        </Stack>
        <Stack className="right">
          <Stack className="overview-box">
            <span className="main-title">Job Overview</span>
            <div className="info-box">
              <img src="/icons/calendar-blue.svg" alt="" />
              <div>
                <strong>Data Posted:</strong>
                <span>October 24, 2026</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/view.svg" alt="" />
              <div>
                <strong>Job View:</strong>
                <span>120 views</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/hourglass-blue.svg" alt="" />
              <div>
                <strong>Deadline date: </strong>
                <span>November 24, 2026</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/location-blue.svg" alt="" />
              <div>
                <strong>Location: </strong>
                <span>Uzbekistan, Tashkent</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/user-blue.svg" alt="" />
              <div>
                <strong>Category: </strong>
                <span>Development</span>
              </div>
            </div>

            <div className="info-box">
              <img src="/icons/dollar-blue.svg" alt="" />
              <div>
                <strong>Rate: </strong>
                <span>$20 / hour</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/salary-blue.svg" alt="" />
              <div>
                <strong>Salary:</strong>
                <span>$1000</span>
              </div>
            </div>

            <div className="location-box">
              <span className="main-title">Job Location</span>
              <div>
                <iframe
                  title="test"
                  src={`https://www.google.com/maps?q=Tashkent&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="tag-box">
              <span className="main-title">Tags</span>
              <div className="wrapper">
                <div>app</div>
                <div>administrative</div>
                <div>android</div>
                <div>design</div>
              </div>
            </div>
          </Stack>
          <Stack className="company-box">
            <Box className="company-main-info">
              <img src={"/icons/default-user.svg"} alt="" />
              <div>
                <span>TechCorp Inc.</span>
                <Link to={`/company/1`}>
                  <p>View company profile</p>
                </Link>
              </div>
            </Box>
            <Box className="company-detail">
              <div className="detail">
                <strong>Company Name:</strong>
                <span>TechCorp Inc.</span>
              </div>

              <div className="detail">
                <strong>Company size:</strong>
                <span>100-500</span>
              </div>

              <div className="detail">
                <strong>Phone:</strong>
                <span>+998901234567</span>
              </div>
            </Box>
            <button>TechCorp Inc.</button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
