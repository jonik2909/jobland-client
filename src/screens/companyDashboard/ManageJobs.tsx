import { useEffect, useState } from "react";
import { Stack, Box, Pagination, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import type { CompanyJobsInquiry, Job } from "../../types/job";
import { JobSort, JobStatus } from "../../types/enums/job.enum";
import companyService from "../../services/CompanyService";
import { useDispatch } from "react-redux";
import { selectCompanyJobs, setCompanyJobs } from "./state";
import { useAppSelector } from "../../hooks";
import moment from "moment";
import { useNavigate } from "react-router";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { errorToast } from "../../lib/Toastify";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F5F7FC",
    color: "#1967D2",
    border: "none",
    padding: "25px 30px",
    [`&.${tableCellClasses.head}:first-child`]: {
      borderRadius: "8px 0 0 8px",
    },
    [`&.${tableCellClasses.head}:last-child`]: {
      borderRadius: "0 8px 8px 0px",
    },
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  td: {
    padding: "30px 0px",
    border: "none",
    borderBottom: "1px solid #ECEDF2",
    [`&:first-child, &:last-child`]: {
      padding: "30px 30px",
    },
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ManageJobs() {
  const dispatch = useDispatch();
  const companyJobs = useAppSelector(selectCompanyJobs);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [statusAnchor, setStatusAnchor] = useState<[] | HTMLElement[]>([]);
  const [filterName, setFilterName] = useState<string>("All");
  const [inquiry, setInquiry] = useState<CompanyJobsInquiry>({
    page: 1,
    limit: 10,
    sort: JobSort.createdAt,
  });

  useEffect(() => {
    companyService
      .getCompanyJobs(inquiry)
      .then((data) => {
        dispatch(setCompanyJobs(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inquiry]);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const statusClickHandler = (e: any, index: number) => {
    const tempAnchor = statusAnchor.slice();
    tempAnchor[index] = e.currentTarget;
    setStatusAnchor(tempAnchor);
  };

  const sortingHandler = (value: string) => {
    setFilterName(value);
    setInquiry({
      ...inquiry,
      jobStatus: value === "All" ? undefined : (value as JobStatus),
      page: 1,
    });
    setAnchorEl(null);
  };

  const statusCloseHandler = () => {
    setStatusAnchor([]);
  };

  const paginationHandler = (_e: React.ChangeEvent<unknown>, value: number) => {
    setInquiry({
      ...inquiry,
      page: value,
    });
  };

  const updateStatusHandler = async (jobId: string, status: JobStatus) => {
    try {
      await companyService.updateJob({ id: jobId, jobStatus: status });

      setInquiry({ ...inquiry });
    } catch (err) {
      console.log("Error, updateStatusHandler:", err);
      errorToast(err);
    }
  };

  return (
    <Stack className="tab-content">
      <span className="main-title">Manage Jobs</span>
      <span className="main-desc">Ready to jump back in?</span>
      <Stack className="content">
        <Stack className="wrap">
          <Box className="filter-box">
            <span className="title">My Job Listings</span>
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
                  {Object.values(JobStatus).map((status: string) => {
                    if (status !== JobStatus.DELETE) {
                      return (
                        <MenuItem
                          onClick={() => sortingHandler(status)}
                          id={status}
                          disableRipple
                          key={status}
                        >
                          {status}
                        </MenuItem>
                      );
                    }
                  })}
                </Menu>
              </div>
            </div>
          </Box>
          <Box className="table-wrap">
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Title</StyledTableCell>
                    <StyledTableCell align="center">
                      Applications
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Created & Expired
                    </StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {companyJobs.list.length > 0 ? (
                    companyJobs.list.map((job: Job, index: number) => {
                      return (
                        <StyledTableRow>
                          <StyledTableCell>
                            <div className="my-job-title">
                              <p>{job.jobTitle}</p>
                              <div>
                                <img src="/icons/location.svg" alt="" />
                                <span>
                                  {job.jobCity}, {job.jobCountry}
                                </span>
                              </div>
                            </div>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <div
                              style={{
                                cursor: "pointer",
                                color: "#1967D2",
                                textDecoration: "underline",
                              }}
                            >
                              {job.appliedCount} Applied
                            </div>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <div className="date-box">
                              <p>
                                {moment(job.createdAt).format("MMMM DD, YYYY")}
                              </p>
                              <p>
                                {moment(job.jobDeadline).format(
                                  "MMMM DD, YYYY",
                                )}
                              </p>
                            </div>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {job.jobStatus === JobStatus.COMPLETE ? (
                              <div
                                className={`status-badge ${job.jobStatus.toLowerCase()}`}
                              >
                                {job.jobStatus}
                              </div>
                            ) : (
                              <div
                                className={`status-badge ${job.jobStatus.toLowerCase()}`}
                                onClick={(e: any) =>
                                  statusClickHandler(e, index)
                                }
                              >
                                {job.jobStatus}
                              </div>
                            )}
                          </StyledTableCell>
                          <Menu
                            sx={{ mt: "20px" }}
                            anchorEl={statusAnchor[0]}
                            open={Boolean(statusAnchor[0])}
                            onClose={() => setStatusAnchor([])}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                          >
                            {Object.values(JobStatus)
                              .filter(
                                (ele: JobStatus) =>
                                  ele !== job.jobStatus &&
                                  ele !== JobStatus.DELETE,
                              )
                              .map((status: JobStatus) => {
                                return (
                                  <MenuItem
                                    onClick={() => {
                                      statusCloseHandler();
                                      updateStatusHandler(job.id, status);
                                    }}
                                    key={status}
                                  >
                                    {status}
                                  </MenuItem>
                                );
                              })}
                          </Menu>
                          <StyledTableCell align="center">
                            <div className="job-action-box">
                              {job.jobStatus === JobStatus.ACTIVE && (
                                <div
                                  onClick={() => navigate(`/jobs/${job.id}`)}
                                >
                                  <RemoveRedEyeOutlinedIcon />
                                </div>
                              )}
                              <div>
                                <EditOutlinedIcon />
                              </div>
                              <div>
                                <DeleteOutlineOutlinedIcon />
                              </div>
                            </div>
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })
                  ) : (
                    <StyledTableRow>
                      <StyledTableCell colSpan={6} align="center">
                        <div className="no-data">
                          <InfoOutlinedIcon />
                          <span>No data found!</span>
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Stack className="pagination-box">
            <Pagination
              color="primary"
              count={Math.ceil(companyJobs.total / inquiry.limit)}
              page={inquiry.page}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
