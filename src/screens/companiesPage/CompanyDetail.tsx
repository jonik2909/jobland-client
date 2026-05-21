import { Stack, Box } from "@mui/material";
import JobCard from "../../components/card/JobCard";
import DetailHeader from "../../components/headers/DetailHeader";
import { useParams } from "react-router";
import { useEffect } from "react";
import memberService from "../../services/MemberService";
import {
  selectCompanyDetail,
  selectCompanyJobs,
  setCompanyDetail,
  setCompanyJobs,
} from "./state";
import { useAppDispatch, useAppSelector } from "../../hooks";
import jobService from "../../services/JobService";
import type { Job } from "../../types/job";
import { formatEnum } from "../../lib/config";

export default function CompanyDetail() {
  const { companyId } = useParams();
  const dispatch = useAppDispatch();
  const companyDetail = useAppSelector(selectCompanyDetail);
  const companyJobs = useAppSelector(selectCompanyJobs);

  useEffect(() => {
    if (!companyId) return;
    memberService
      .getMember(companyId)
      .then((data) => {
        dispatch(setCompanyDetail(data));
      })
      .catch((err) => {
        console.log(err);
      });

    jobService
      .getJobs({
        page: 1,
        limit: 4,
        companyId: companyId,
      })
      .then((data) => {
        dispatch(setCompanyJobs(data.list));
      })
      .catch((err) => console.log(err));
  }, [companyId]);

  return (
    <div className="company-detail">
      <DetailHeader isJob={false} memberDetail={companyDetail} />
      <Stack className="container">
        <Stack className="left">
          <Box className="info">
            <span>About Company</span>
            <p>{companyDetail?.memberDesc || "no description"}</p>
          </Box>
          {companyJobs && companyJobs.length !== 0 && (
            <Box className="related-job-box">
              <span className="title">
                {companyJobs.length} jobs at {companyDetail?.memberNick}
              </span>
              <p className="desc">
                get acquainted with other jobs of the company.
              </p>
              <div className="wrapper">
                {companyJobs.map((job: Job) => (
                  <JobCard job={job} key={job.id} />
                ))}
              </div>
            </Box>
          )}
        </Stack>
        <Stack className="right">
          <Stack className="company-box">
            <Box className="company-info">
              <div className="detail">
                <strong>Company Name:</strong>
                <span>{companyDetail?.memberNick}</span>
              </div>

              <div className="detail">
                <strong>Company size:</strong>
                <span>{companyDetail?.memberTeamSize || "-"}</span>
              </div>
              <div className="detail">
                <strong>Category</strong>
                <span>{formatEnum(companyDetail?.memberCategory) || "-"}</span>
              </div>
              <div className="detail">
                <strong>Phone:</strong>
                <span>{companyDetail?.memberPhone}</span>
              </div>

              <div className="detail">
                <strong>View:</strong>
                <span>{companyDetail?.memberViews} views</span>
              </div>
            </Box>
            {companyDetail?.memberWebsite ? (
              <a href={companyDetail?.memberWebsite} target="_blank">
                <button>{companyDetail?.memberNick} website</button>
              </a>
            ) : (
              <button>{companyDetail?.memberNick}</button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
