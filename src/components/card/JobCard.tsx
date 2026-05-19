import { Box } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Link } from "react-router";

interface JobCardProps {
  width?: string;
}

export default function JobCard(props: JobCardProps) {
  const { width } = props;
  return (
    <Link to={`/jobs/1`}>
      <Box className="job-card" sx={{ width }}>
        <img src="/icons/default-user.svg" alt="" className="logo" />
        <div className="main-info">
          <span className="job-title">Software Engineer</span>
          <div className="main">
            <div>
              <img src="/icons/brifcase-gray.svg" alt="" />
              <span>Development</span>
            </div>
            <div>
              <img src="/icons/location.svg" alt="" />
              <span>Tashkent</span>
            </div>
            <div>
              <img src="/icons/clock.svg" alt="" />
              <span>October 24, 2026</span>
            </div>
            <div>
              <img src="/icons/job-money.svg" alt="" />
              <span>$1000</span>
            </div>
          </div>
          <div className="badges">
            <div>Uzbekistan</div>
            <div>Full Time</div>
            <div>Middle</div>
          </div>
        </div>
        <BookmarkBorderOutlinedIcon />
      </Box>
    </Link>
  );
}
