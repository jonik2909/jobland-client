import { Stack, Box, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Stack className="footer">
      <Stack className="main-footer">
        <Container className="container">
          <Stack className="top">
            <Box className="main-info">
              <img src="/logo.webp" alt="" />

              <h6>Call us</h6>
              <span>123 456 7890</span>
              <p>
                329 Queensberry Street, North Melbourne VIC <br /> 3051,
                Australia. <br /> support@jobio.com
              </p>
            </Box>
            <Box className="for-type">
              <div className="box">
                <strong>For Candidates</strong>

                <span>Browse Jobs</span>
                <span>Browse Categories</span>
                <span>Candidate Dashboard</span>
                <span>Job Alerts</span>
                <span>My Bookmarks</span>
              </div>
              <div className="box">
                <strong>For Employers</strong>

                <span>Browse Candidates </span>
                <span>Employer Dashboard </span>
                <span>Add Job </span>
                <span>Job Packages </span>
              </div>
              <div className="box">
                <strong>About Us </strong>

                <span>Job Page </span>
                <span>Job Page Alternative </span>
                <span>Resume Page </span>
                <span>Blog </span>
                <span>Contact</span>
              </div>
              <div className="box">
                <strong>Helpful Resources </strong>

                <span>Site Map </span>
                <span>Terms of Use </span>
                <span>Privacy Center </span>
                <span>Security Center </span>
                <span>Accessibility Center </span>
              </div>
            </Box>
          </Stack>
        </Container>
      </Stack>
      <Stack className="bott">
        <Container className="container">
          <p>© 2021 Superio. All Right Reserved.</p>
          <Box className="social-media">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
        </Container>
      </Stack>
    </Stack>
  );
}
