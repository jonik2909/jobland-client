import { Stack, Box, Container } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import type { Job } from "../../types/job";
import moment from "moment";
import { formatEnum, getImageUrl } from "../../lib/config";

interface DetailHeaderProps {
  isJob: boolean;
  jobDetail?: Job | null;
}

export default function DetailHeader(props: DetailHeaderProps) {
  const { isJob, jobDetail } = props;
  return (
    <Stack className="detail-header">
      {!isJob ? (
        <Container className="container">
          <img src="/icons/default-user.svg" alt="" className="logo" />
          <Box className="main-info">
            <span className="job-title">John Doe</span>
            <div className="main">
              <div>
                <strong>Candidate</strong>
              </div>

              <div>
                <img src="/icons/clock.svg" alt="" />
                <span>October 24, 2026</span>
              </div>
              <div>
                <img src="/icons/brifcase-gray.svg" alt="" />
                <span>Development</span>
              </div>
            </div>
            <div className="badges">
              <div>USER</div>
              <div>$5000</div>
            </div>
          </Box>
          <Box className="btns">
            <button>Download CV</button>

            <div>
              <BookmarkBorderOutlinedIcon />
            </div>
          </Box>
        </Container>
      ) : (
        <Container className="container">
          <img
            src={getImageUrl(jobDetail?.company?.memberImage)}
            alt=""
            className="logo"
          />
          <Box className="main-info">
            <span className="job-title">{jobDetail?.jobTitle}</span>
            <div className="main">
              <div>
                <img src="/icons/brifcase-gray.svg" alt="" />
                <span>{jobDetail?.company?.memberNick}</span>
              </div>
              <div>
                <img src="/icons/location.svg" alt="" />
                <span>{jobDetail?.jobCity}</span>
              </div>
              <div>
                <img src="/icons/clock.svg" alt="" />
                <span>
                  {moment(jobDetail?.createdAt).format("MMMM DD, YYYY")}
                </span>
              </div>
              <div>
                <img src="/icons/job-money.svg" alt="" />
                <span>${jobDetail?.jobSalary}</span>
              </div>
            </div>
            <div className="badges">
              <div>{jobDetail?.jobCountry}</div>
              <div>{formatEnum(jobDetail?.jobType)}</div>
              <div>{jobDetail?.jobLevel}</div>
            </div>
          </Box>
          <Box className="btns">
            {!jobDetail.meApplied ? (
              <button>Apply for Job</button>
            ) : (
              <button>{jobDetail?.meApplied.applicationStatus}</button>
            )}

            <div>
              <BookmarkBorderOutlinedIcon />
            </div>
          </Box>
        </Container>
      )}
    </Stack>
  );
}
