import { useEffect, useState } from "react";
import { Stack, Box, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { selectCompanyApplicants, setCompanyApplicants } from "./state";
import { useNavigate, useSearchParams } from "react-router";
import type {
  Application,
  CompanyApplicantsInquiry,
} from "../../types/application";
import companyService from "../../services/CompanyService";
import { ApplicationStatus } from "../../types/enums/application.enum";
import { errorToast, successToast } from "../../lib/Toastify";
import { formatEnum } from "../../lib/config";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function AllApplicants() {
  const dispatch = useDispatch();
  const companyApplicants = useAppSelector(selectCompanyApplicants);
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");
  const jobTitle = searchParams.get("jobTitle");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filterName, setFilterName] = useState<string>("All");
  const [inquiry, setInquiry] = useState<CompanyApplicantsInquiry>({
    page: 1,
    limit: 10,
    jobId: jobId || undefined,
  });

  useEffect(() => {
    companyService
      .getCompanyApplicants(inquiry)
      .then((data) => {
        dispatch(setCompanyApplicants(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inquiry]);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const sortingHandler = (status: string) => {
    setFilterName(status);
    setInquiry({
      ...inquiry,
      applicationStatus:
        status === "All" ? undefined : (status as ApplicationStatus),
      page: 1,
    });
    setAnchorEl(null);
  };

  const viewCandidateHandler = async (
    id: string,
    candidateId: string,
    update: boolean,
  ) => {
    try {
      if (update) {
        await companyService.updateApplicationStatus(
          id,
          ApplicationStatus.VIEWED,
        );
      }
      navigate(`/candidates/${candidateId}`);
    } catch (err) {
      console.log(err);
      errorToast(err);
    }
  };

  const changeApplicationStatusHandler = async (
    id: string,
    status: ApplicationStatus,
  ) => {
    try {
      const action =
        status === ApplicationStatus.APPROVED ? "approve" : "reject";
      if (!confirm(`Are you sure you want to ${action} this applicant?`))
        return;

      await companyService.updateApplicationStatus(id, status);

      setInquiry({ ...inquiry });
      successToast("status changed successfully!");
    } catch (err) {
      console.log(err);
      errorToast(err);
    }
  };

  return (
    <Stack className="tab-content">
      <span className="main-title">All Applicants</span>
      <span className="main-desc">Ready to jump back in?</span>
      <Stack className="content">
        <Stack className="wrap">
          <Box className="filter-box">
            <span className="title">Applicant</span>
            <div className="filter">
              <div className="sort-box">
                <div onClick={sortingClickHandler}>
                  {filterName} <KeyboardArrowDownRoundedIcon />
                </div>
                <Menu
                  anchorEl={anchorEl}
                  open={!!anchorEl}
                  onClose={() => setAnchorEl(null)}
                  sx={{ paddingTop: "5px" }}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                      sx: { width: anchorEl && anchorEl.offsetWidth },
                    },
                  }}
                >
                  <MenuItem onClick={() => sortingHandler("All")} disableRipple>
                    All
                  </MenuItem>
                  {Object.values(ApplicationStatus).map((status) => (
                    <MenuItem
                      key={status}
                      onClick={() => sortingHandler(status)}
                      disableRipple
                    >
                      {status}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          </Box>
          <Box className="accordion-box">
            {jobId ? (
              <Box sx={{ marginTop: "10px" }}>
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "center",
                    backgroundColor: "#F5F7FC",
                    padding: "15px 30px",
                    borderRadius: "8px",
                    minHeight: "70px",
                    "& > span:first-of-type": {
                      flexGrow: 1,
                    },
                    "& > span:not(:first-of-type)": {
                      marginLeft: "20px",
                    },
                  }}
                >
                  <span
                    className="title-text"
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#202124",
                    }}
                  >
                    {jobTitle}
                  </span>
                  <span className="total-text" style={{ color: "#1967D2" }}>
                    Total(s): {companyApplicants.stats.applied}
                  </span>
                  <span className="approved-text" style={{ color: "#34A853" }}>
                    Approved: {companyApplicants.stats.approved}
                  </span>
                  <span className="rejected-text" style={{ color: "#D93025" }}>
                    Rejected(s): {companyApplicants.stats.rejected}
                  </span>
                </Stack>
                <Box sx={{ padding: 0, marginTop: "20px" }}>
                  <div className="card-wrapper">
                    {companyApplicants.list.map((application: Application) => (
                      <div className="my-candidate-card" key={application.id}>
                        <img
                          src="/icons/default-user.svg"
                          alt=""
                          className="user-img"
                        />
                        <div className="main-info">
                          <span className="job-title">
                            {application.candidate?.memberNick}
                          </span>
                          <div className="main">
                            <div>
                              <strong>
                                {formatEnum(application.candidate?.memberType)}
                              </strong>
                            </div>

                            <div>
                              <img src="/icons/job-money.svg" alt="" />
                              <span>
                                {application.candidate?.memberSalary || "-"}k
                              </span>
                            </div>
                          </div>
                          <div className="badges">
                            <div>
                              {application.candidate?.memberCountry || "-"}
                            </div>
                            <div>
                              {application.candidate?.memberExperience || "-"}y
                            </div>
                            <div>
                              {application.candidate?.memberAge || 0} y.o
                            </div>
                          </div>
                        </div>
                        <div className="action-info">
                          {application.applicationStatus ===
                            ApplicationStatus.VIEWED ||
                          application.applicationStatus !==
                            ApplicationStatus.SUBMITTED ? (
                            <div
                              className={"active"}
                              onClick={() =>
                                viewCandidateHandler(
                                  application.id,
                                  application.candidateId,
                                  false,
                                )
                              }
                            >
                              <RemoveRedEyeOutlinedIcon />
                            </div>
                          ) : (
                            <div
                              onClick={() =>
                                viewCandidateHandler(
                                  application.id,
                                  application.candidateId,
                                  true,
                                )
                              }
                            >
                              <RemoveRedEyeOutlinedIcon />
                            </div>
                          )}

                          <div
                            className={
                              application.applicationStatus ===
                              ApplicationStatus.APPROVED
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              changeApplicationStatusHandler(
                                application.id,
                                ApplicationStatus.APPROVED,
                              )
                            }
                          >
                            <CheckIcon />
                          </div>
                          <div
                            className={
                              application.applicationStatus ===
                              ApplicationStatus.REJECTED
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              changeApplicationStatusHandler(
                                application.id,
                                ApplicationStatus.REJECTED,
                              )
                            }
                          >
                            <HighlightOffIcon />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Box>
              </Box>
            ) : (
              <div className="no-data">
                <InfoOutlinedIcon />
                <span>Please Select a Job!</span>
              </div>
            )}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
