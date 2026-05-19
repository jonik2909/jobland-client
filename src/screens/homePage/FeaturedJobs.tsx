import { Stack, Box, Container } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router";
import JobCard from "../../components/card/JobCard";

const popularJobs = [1, 2, 3, 4];

export default function FeaturedJobs() {
  return (
    <Stack className="featured-jobs">
      <Container className="container">
        <Stack className="info-sec">
          <Box className="left">
            <span className="title">Featured Jobs</span>
            <p className="desc">
              Know your worth and find the job that qualify your life
            </p>
          </Box>
          <Box className="right">
            <Link to={"/jobs"}>Browse All</Link>
            <ChevronRightIcon />
          </Box>
        </Stack>
        <Stack className="wrapper">
          {popularJobs.map(() => (
            <JobCard width="634px" />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}
