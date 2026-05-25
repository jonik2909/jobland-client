import { Stack, Box, Container } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import type { Job } from "../../types/job";
import moment from "moment";
import { formatEnum, getImageUrl } from "../../lib/config";
import { MemberType } from "../../types/enums/member.enum";
import type { Member } from "../../types/member";

interface DetailHeaderProps {
  isJob: boolean;
  jobDetail?: Job | null;
  memberDetail?: Member | null;
  submitApplicationHandler?: (jobId: string) => void;
}

export default function DetailHeader(props: DetailHeaderProps) {
  const { isJob, jobDetail, memberDetail, submitApplicationHandler } = props;
  return (
    <Stack className="detail-header">
      {!isJob ? (
        <Container className="container">
          <img
            src={getImageUrl(memberDetail?.memberImage)}
            alt=""
            className="logo"
          />
          <Box className="main-info">
            <span className="job-title">{memberDetail?.memberNick}</span>
            <div className="main">
              <div>
                <strong>{memberDetail?.memberType}</strong>
              </div>

              <div>
                <img src="/icons/clock.svg" alt="" />
                <span>
                  {moment(memberDetail?.createdAt).format("MMMM DD, YYYY")}
                </span>
              </div>
              <div>
                <img src="/icons/brifcase-gray.svg" alt="" />
                <span>{formatEnum(memberDetail?.memberCategory) || "-"}</span>
              </div>
            </div>
            <div className="badges">
              <div>{memberDetail?.memberType}</div>
              {memberDetail?.memberType === MemberType.COMPANY ? (
                <div>{memberDetail?.memberTeamSize || "-"}</div>
              ) : (
                <div>${memberDetail?.memberSalary || "-"}</div>
              )}
            </div>
          </Box>
          <Box className="btns">
            {memberDetail?.memberType === MemberType.CANDIDATE && (
              <button>Download CV</button>
            )}

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
            {!jobDetail?.meApplied ? (
              <button
                onClick={() =>
                  submitApplicationHandler &&
                  jobDetail?.id &&
                  submitApplicationHandler(jobDetail.id)
                }
              >
                Apply for Job
              </button>
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
