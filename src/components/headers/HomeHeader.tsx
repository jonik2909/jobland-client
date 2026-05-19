import { Box, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function HomeHeader() {
  return (
    <div className="home-header">
      <Container className="container">
        <Stack className="left">
          <span className="title">
            Find a Prefect <br /> Candidate
          </span>
          <p className="desc">Find Jobs, Employment & Career Opportunities</p>
          <Box className="search">
            <div className="search-box">
              <SearchIcon />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
              />
              <button>Find Jobs</button>
            </div>
            <div className="search-result">
              <strong>Popular Searches: </strong>
              <span>Designer, Developer, Web, IOS, PHP, Senior, Engineer</span>
            </div>
          </Box>
        </Stack>
        <Stack className="right">
          <img src="/image/home-header.png" alt="" className="homeHeader" />
          <div className="box one">
            <div>
              <img src="/icons/message.svg" alt="" />
            </div>
            <span>
              Work Inquiry <br />
              From Ali Tufan
            </span>
          </div>
          <div className="box two">
            <span>10k+ Candidates</span>
            <div className="wrapper">
              <div className="one">
                <img src="image/home-header.png" alt="" />
              </div>
              <div className="two">
                <img src="image/home-header.png" alt="" />
              </div>
              <div className="three">
                <img src="image/home-header.png" alt="" />
              </div>
              <div className="four">
                <img src="image/home-header.png" alt="" />
              </div>
              <div className="five">
                <span>+</span>
              </div>
            </div>
          </div>
          <div className="box three">
            <div className="icon-box">
              <img src="/icons/brifcase.svg" alt="" />
            </div>
            <div className="text-box">
              <strong>Creative Agency</strong>
              <span>Startup</span>
            </div>
            <div className="small-icon">
              <img src="/icons/correct.svg" alt="" />
            </div>
          </div>
          <div className="box four">
            <div className="icon-box">
              <img src="/icons/upload.svg" alt="" />
            </div>
            <div className="text-box">
              <strong>Upload Your CV</strong>
              <span>It only takes a few seconds</span>
            </div>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
