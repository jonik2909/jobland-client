import { Stack, Box, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import JobCard from "../../components/card/JobCard";
import { Link, useParams } from "react-router";
import DetailHeader from "../../components/headers/DetailHeader";
import { useEffect } from "react";
import jobService from "../../services/JobService";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  selectJobDetail,
  selectRelatedJobs,
  setJobDetail,
  setRelatedJobs,
} from "./state";
import moment from "moment";
import { formatEnum } from "../../lib/config";
import type { Job } from "../../types/job";

export default function JobDetail() {
  const { jobId } = useParams();
  const dispatch = useAppDispatch();
  const jobDetail = useAppSelector(selectJobDetail);
  const relatedJobs = useAppSelector(selectRelatedJobs);

  useEffect(() => {
    if (!jobId) return;
    jobService
      .getJob(jobId)
      .then((data) => {
        dispatch(setJobDetail(data));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    jobService
      .getJobs({
        page: 1,
        limit: 4,
        companyId: jobDetail?.companyId,
      })
      .then((data) => {
        dispatch(setRelatedJobs(data.list));
      })
      .catch((err) => console.log(err));
  }, [jobDetail]);

  console.log("jobDetail:", jobDetail);

  return (
    <div className="job-detail">
      <DetailHeader isJob={true} jobDetail={jobDetail} />
      <Container className="container">
        <Stack className="left">
          <Box className="info">
            <span>Job Description</span>
            <p>{jobDetail?.jobDesc}</p>
          </Box>
          <Box className="info">
            <span>Key Responsibilities</span>
            <ul>
              {jobDetail?.jobRequirement
                ?.split("\n")
                .map((requirement: string) => (
                  <li>{requirement}</li>
                ))}
            </ul>
          </Box>
          <Box className="info">
            <span>Skill & Experience</span>
            <ul>
              {jobDetail?.jobExpertise?.split("\n").map((expertise: string) => (
                <li>{expertise}</li>
              ))}
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
                {relatedJobs.map((job: Job) => (
                  <JobCard job={job} />
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
                <span>
                  {moment(jobDetail?.createdAt).format("MMMM DD, YYYY")}
                </span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/view.svg" alt="" />
              <div>
                <strong>Job View:</strong>
                <span>{jobDetail?.jobViews} views</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/hourglass-blue.svg" alt="" />
              <div>
                <strong>Deadline date: </strong>
                <span>
                  {moment(jobDetail?.jobDeadline).format("MMMM DD, YYYY")}
                </span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/location-blue.svg" alt="" />
              <div>
                <strong>Location: </strong>
                <span>
                  {" "}
                  {jobDetail?.jobCountry}, {jobDetail?.jobCity}
                </span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/user-blue.svg" alt="" />
              <div>
                <strong>Category: </strong>
                <span>{formatEnum(jobDetail?.jobCategory)}</span>
              </div>
            </div>

            <div className="info-box">
              <img src="/icons/dollar-blue.svg" alt="" />
              <div>
                <strong>Rate: </strong>
                <span>${jobDetail?.jobHourRate} / hour</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/salary-blue.svg" alt="" />
              <div>
                <strong>Salary:</strong>
                <span>${jobDetail?.jobSalary}</span>
              </div>
            </div>

            <div className="location-box">
              <span className="main-title">Job Location</span>
              <div>
                <iframe
                  title="test"
                  src={`https://www.google.com/maps?q=${jobDetail?.jobAddress}&output=embed`}
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
                <span>{jobDetail?.company?.memberNick}</span>
                <Link to={`/companies/${jobDetail?.companyId}`}>
                  <p>View company profile</p>
                </Link>
              </div>
            </Box>
            <Box className="company-detail">
              <div className="detail">
                <strong>Company Name:</strong>
                <span>{jobDetail?.company?.memberNick}</span>
              </div>

              <div className="detail">
                <strong>Company size:</strong>
                <span>{jobDetail?.company?.memberTeamSize || "-"}</span>
              </div>

              <div className="detail">
                <strong>Phone:</strong>
                <span>+{jobDetail?.company?.memberPhone}</span>
              </div>
            </Box>
            {jobDetail?.company?.memberWebsite ? (
              <a href={jobDetail?.company?.memberWebsite} target="_blank">
                <button>{jobDetail?.company?.memberNick}</button>
              </a>
            ) : (
              <button>{jobDetail?.company?.memberNick}</button>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
