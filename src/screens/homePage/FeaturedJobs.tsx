import { Stack, Box, Container } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router";
import JobCard from "../../components/card/JobCard";
import { selectFeaturedJobs } from "./state";
import { useAppSelector } from "../../hooks";
import type { Job } from "../../types/job";

export default function FeaturedJobs() {
  // (3) REDUX STORE SELECT
  const featuredJobs = useAppSelector(selectFeaturedJobs);

  console.log("featuredJobs:", featuredJobs);

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
          {featuredJobs.map((job: Job) => (
            <JobCard width="634px" job={job} />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}
