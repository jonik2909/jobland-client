import { Stack, Box, Pagination, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useEffect, useState } from "react";
import { ApplicationStatus } from "../../types/enums/application.enum";
import type { Application, ApplicationsInquiry } from "../../types/application";
import applicationService from "../../services/ApplicationService";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectMyApplications, setMyApplications } from "./state";
import { formatEnum, getImageUrl } from "../../lib/config";
import moment from "moment";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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

export default function AppliedJobs() {
  const dispatch = useAppDispatch();
  const myApplications = useAppSelector(selectMyApplications);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filterName, setFilterName] = useState<string>("All");
  const [applicationInquiry, setApplicationInquiry] =
    useState<ApplicationsInquiry>({
      page: 1,
      limit: 10,
    });

  useEffect(() => {
    applicationService
      .getMyApplications(applicationInquiry)
      .then((data) => {
        dispatch(setMyApplications(data));
      })
      .catch((err) => console.log(err));
  }, [applicationInquiry]);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const sortingHandler = (value: string) => {
    setFilterName(value);
    setApplicationInquiry({
      ...applicationInquiry,
      applicationStatus:
        value === "All" ? undefined : (value as ApplicationStatus),
    });
    setAnchorEl(null);
  };

  const paginationHandler = (_e: React.ChangeEvent<unknown>, value: number) => {
    setApplicationInquiry({
      ...applicationInquiry,
      page: value,
    });
  };

  return (
    <Stack className="tab-content">
      <span className="main-title">Applied Jobs</span>
      <span className="main-desc">Ready to jump back in?</span>
      <Stack className="content">
        <Stack>
          <Stack className="wrap">
            <Box className="filter-box">
              <span className="title">Applied Jobs</span>
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
                    <MenuItem
                      id={"All"}
                      disableRipple
                      onClick={() => sortingHandler("All")}
                    >
                      All
                    </MenuItem>
                    {Object.values(ApplicationStatus).map((status: string) => (
                      <MenuItem
                        disableRipple
                        onClick={() => sortingHandler(status)}
                      >
                        {status}
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
                      <StyledTableCell>Title</StyledTableCell>
                      <StyledTableCell align="center">
                        Date Applied
                      </StyledTableCell>
                      <StyledTableCell align="center">Status</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {myApplications.list.length > 0 ? (
                      myApplications.list.map((application: Application) => {
                        return (
                          <StyledTableRow>
                            <StyledTableCell>
                              <div className="applied-job-box">
                                <img
                                  src={getImageUrl(
                                    application.company?.memberImage,
                                  )}
                                  alt=""
                                  className="job-logo"
                                />
                                <div className="my-job-title">
                                  <p>{application.job?.jobTitle}</p>
                                  <div style={{ margin: 0 }}>
                                    <div>
                                      <img
                                        src="/icons/brifcase-gray.svg"
                                        alt=""
                                      />
                                      <span>
                                        {formatEnum(
                                          application.job?.jobCategory,
                                        )}
                                      </span>
                                    </div>
                                    <div
                                      style={{
                                        marginRight: "20px",
                                        marginLeft: "20px",
                                      }}
                                    >
                                      <img src="/icons/location.svg" alt="" />
                                      <span>
                                        {application.job?.jobCity},{" "}
                                        {application.job?.jobCountry}
                                      </span>
                                    </div>
                                    <div>
                                      <img src="/icons/job-money.svg" alt="" />
                                      <span> {application.job?.jobSalary}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <div className="date-box">
                                <p>
                                  October 25, 2026
                                  {moment(application.createdAt).format(
                                    "MMMM DD, YYYY",
                                  )}
                                </p>
                              </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <div
                                className={`job-status ${application.applicationStatus.toLocaleLowerCase()}`}
                              >
                                {application.applicationStatus}
                              </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <div className="job-action-box">
                                {application.applicationStatus ===
                                ApplicationStatus.SUBMITTED ? (
                                  <div>
                                    <DeleteOutlineOutlinedIcon />
                                  </div>
                                ) : (
                                  <div className="disable">
                                    <DeleteOutlineOutlinedIcon />
                                  </div>
                                )}
                              </div>
                            </StyledTableCell>
                          </StyledTableRow>
                        );
                      })
                    ) : (
                      <StyledTableRow>
                        <StyledTableCell colSpan={5} align="center">
                          <div className="no-data">
                            <InfoOutlinedIcon />
                            <span>No applications found</span>
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
                count={Math.ceil(
                  myApplications.total / applicationInquiry.limit,
                )}
                page={applicationInquiry.page}
                onChange={paginationHandler}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
