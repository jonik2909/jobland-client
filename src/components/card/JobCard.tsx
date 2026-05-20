import { Box } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Link } from "react-router";
import type { Job } from "../../types/job";
import moment from "moment";
import { formatEnum, getImageUrl } from "../../lib/config";

interface JobCardProps {
  width?: string;
  job: Job;
}

export default function JobCard(props: JobCardProps) {
  const { width, job } = props;
  return (
    <Link to={`/jobs/${job.id}`}>
      <Box className="job-card" sx={{ width }}>
        <img
          src={getImageUrl(job.company?.memberImage)}
          alt=""
          className="logo"
        />
        <div className="main-info">
          <span className="job-title">{job.jobTitle}</span>
          <div className="main">
            <div>
              <img src="/icons/brifcase-gray.svg" alt="" />
              <span>{job.company?.memberNick}</span>
            </div>
            <div>
              <img src="/icons/location.svg" alt="" />
              <span>{job.jobCountry}</span>
            </div>
            <div>
              <img src="/icons/clock.svg" alt="" />
              <span>{moment(job.createdAt).format("MMM Do, YY")}</span>
            </div>
            <div>
              <img src="/icons/job-money.svg" alt="" />
              <span>${job.jobSalary}</span>
            </div>
          </div>
          <div className="badges">
            <div>{job.jobCountry}</div>
            <div>{formatEnum(job.jobType)}</div>
            <div>{job.jobLevel}</div>
          </div>
        </div>
        <BookmarkBorderOutlinedIcon />
      </Box>
    </Link>
  );
}
