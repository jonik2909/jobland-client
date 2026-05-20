import { Stack, Box, Container } from "@mui/material";
import DetailHeader from "../../components/headers/DetailHeader";

export default function CandidantDetail() {
  return (
    <div className="candidate-detail">
      <DetailHeader isJob={false} />
      <Container className="container">
        <Stack className="left">
          <Box className="info">
            <span className="main-title">About Candidate</span>
            <p style={{ whiteSpace: "pre-line" }}>
              Hello, I'm a passionate developer with extensive experience in
              React.
            </p>
          </Box>

          <Box className="work-experience">
            <span className="main-title">Education</span>
            <div className="experience-box">
              <div className="left-box">
                <div className="order-number red">1</div>
              </div>
              <div className="right-box">
                <div className="company-box">
                  <div className="company-info">
                    <strong>MIT</strong>
                  </div>
                  <div className="year red">2016 - 2020</div>
                </div>
                <p style={{ whiteSpace: "pre-line" }}>Computer Science BSc</p>
              </div>
            </div>
          </Box>

          <Box className="work-experience">
            <span className="main-title">Work & Experience</span>
            <div className="experience-box">
              <div className="left-box">
                <div className="order-number blue">1</div>
              </div>
              <div className="right-box">
                <div className="company-box">
                  <div className="company-info">
                    <strong>Google</strong>
                  </div>
                  <div className="year blue">2020 - 2024</div>
                </div>
                <p style={{ whiteSpace: "pre-line" }}>Software Engineer II</p>
              </div>
            </div>
          </Box>

          <Box className="work-experience">
            <span className="main-title">Awards</span>
            <div className="experience-box">
              <div className="left-box">
                <div className="order-number yellow">1</div>
              </div>
              <div className="right-box">
                <div className="company-box">
                  <div className="company-info">
                    <strong>Best Developer</strong>
                  </div>
                  <div className="year yellow">2022</div>
                </div>
                <p style={{ whiteSpace: "pre-line" }}>
                  Awarded by Tech Magazine
                </p>
              </div>
            </div>
          </Box>
        </Stack>

        <Stack className="right">
          <Stack className="experience-info">
            <div className="info-box">
              <img src="/icons/calendar-blue.svg" alt="" />
              <div>
                <strong>Experience</strong>
                <span>4 years</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/hourglass-blue.svg" alt="" />
              <div>
                <strong>Age </strong>
                <span>26 years</span>
              </div>
            </div>

            <div className="info-box">
              <img src="/icons/salary-blue.svg" alt="" />
              <div>
                <strong>Expected Salary </strong>
                <span>$120k</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/language-blue.svg" alt="" />
              <div>
                <strong>Language </strong>
                <span>English</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/view.svg" alt="" />
              <div>
                <strong>Candidate View:</strong>
                <span>1,234 views</span>
              </div>
            </div>

            <div className="tag-box">
              <span className="main-title">Professional Skills</span>
              <div className="wrapper">
                <div>app</div>
                <div>administrative</div>
                <div>android</div>
                <div>design</div>
              </div>
            </div>
          </Stack>
          <Stack className="contact-us">
            <span>Contact Us</span>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message"
            ></textarea>
            <button>Send Message</button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
