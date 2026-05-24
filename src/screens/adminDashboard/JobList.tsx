import {
  Box,
  Link,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Table,
  TableBody,
  styled,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import type { AdminJobsInquiry, Job } from "../../types/job";
import { useEffect, useState } from "react";
import adminService from "../../services/AdminService";
import { selectAdminJobs, setAdminJobs } from "./state";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { formatEnum } from "../../lib/config";
import { errorToast, successToast } from "../../lib/Toastify";
import { JobSort, JobStatus, JobType } from "../../types/enums/job.enum";

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
  // hide last border
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

export default function JobList() {
  const dispatch = useDispatch();
  const adminJobs = useAppSelector(selectAdminJobs);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [statusAnchor, setStatusAnchor] = useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const [filterName, setFilterName] = useState("All");
  const [inquiry, setInquiry] = useState<AdminJobsInquiry>({
    page: 1,
    limit: 10,
    sort: JobSort.createdAt,
  });

  useEffect(() => {
    adminService
      .getAllJobs(inquiry)
      .then((data) => {
        dispatch(setAdminJobs(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inquiry]);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const statusClickHandler = (e: any, key: string) => {
    setStatusAnchor({ ...statusAnchor, [key]: e.currentTarget });
  };

  const statusCloseHandler = () => {
    setStatusAnchor({});
  };

  const sortingHandler = (value: string) => {
    setFilterName(value);
    setInquiry({
      ...inquiry,
      jobType: value === "All" ? undefined : (value as JobType),
      page: 1,
    });
    setAnchorEl(null);
  };

  const paginationHandler = (_e: React.ChangeEvent<unknown>, value: number) => {
    setInquiry({
      ...inquiry,
      page: value,
    });
  };

  const updateJobHandler = async (jobId: string, status: JobStatus) => {
    try {
      await adminService.updateAdminJob(jobId, status);
      setInquiry({ ...inquiry });
      successToast("Successfully updated!", 700);
    } catch (err) {
      console.log(err);
      errorToast(err);
    }
  };

  return (
    <Stack className="tab-content">
      <span className="main-title">All Jobs</span>
      <span className="main-desc">Ready to jump back in?</span>
      <Stack className="content">
        <Stack className="wrap">
          <Box className="filter-box">
            <span className="title">All Jobs</span>
            <div className="filter">
              <div className="sort-box">
                <div onClick={sortingClickHandler}>
                  {formatEnum(filterName)} <KeyboardArrowDownRoundedIcon />
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
                  <MenuItem
                    onClick={() => sortingHandler("All")}
                    id={"All"}
                    disableRipple
                  >
                    All
                  </MenuItem>
                  {Object.values(JobType).map((type: JobType) => (
                    <MenuItem
                      onClick={() => sortingHandler(type)}
                      id={type}
                      disableRipple
                    >
                      {formatEnum(type)}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          </Box>
          <Box className="table-wrap">
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Job Title</StyledTableCell>
                    <StyledTableCell align="center">Company</StyledTableCell>
                    <StyledTableCell align="center">Category</StyledTableCell>
                    <StyledTableCell align="center">Applied</StyledTableCell>
                    <StyledTableCell align="center">Type</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {adminJobs.list.length > 0 ? (
                    adminJobs.list.map((job: Job) => {
                      let title = job.jobTitle;
                      if (title.length > 20) {
                        title = title.slice(0, 17) + "...";
                      }
                      return (
                        <StyledTableRow>
                          <StyledTableCell>{title}</StyledTableCell>
                          <StyledTableCell align="center">
                            {job.company?.memberNick}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {formatEnum(job.jobCategory)}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Link
                              component="button"
                              variant="body2"
                              sx={{ fontWeight: "bold" }}
                            >
                              {job.appliedCount}
                            </Link>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {formatEnum(job.jobType)}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <div
                              className={`status-badge ${job.jobStatus.toLowerCase()}`}
                              onClick={(e) => statusClickHandler(e, job.id)}
                            >
                              {job.jobStatus.toLowerCase()}
                            </div>
                            <Menu
                              sx={{ mt: "20px" }}
                              anchorEl={statusAnchor[job.id]}
                              open={Boolean(statusAnchor[job.id])}
                              onClose={statusCloseHandler}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                              }}
                            >
                              {Object.values(JobStatus)
                                .filter(
                                  (ele: JobStatus) => ele !== job.jobStatus,
                                )
                                .map((status: JobStatus) => {
                                  return (
                                    <MenuItem
                                      onClick={() => {
                                        statusCloseHandler();
                                        updateJobHandler(job.id, status);
                                      }}
                                      key={status}
                                    >
                                      {status}
                                    </MenuItem>
                                  );
                                })}
                            </Menu>
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
              count={Math.ceil(adminJobs.total / inquiry.limit)}
              page={inquiry.page}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
