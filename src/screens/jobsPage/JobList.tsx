import {
  Box,
  Container,
  Menu,
  MenuItem,
  Pagination,
  Stack,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import OtherHeader from "../../components/headers/OtherHeader";
import Filter from "./Filter";
import JobCard from "../../components/card/JobCard";
import { useEffect, useState } from "react";
import jobService from "../../services/JobService";
import { JobSort } from "../../types/enums/job.enum";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectJobs, setJobs } from "./state";
import type { Job, JobsInquiry } from "../../types/job";

const JobList = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const jobs = useAppSelector(selectJobs);
  const [filterName, setFilterName] = useState("New");
  const [searchText, setSearchText] = useState("");
  const [jobsInquiry, setJobsInquiry] = useState<JobsInquiry>({
    page: 1,
    limit: 6,
    sort: JobSort.createdAt,
  });

  useEffect(() => {
    console.log("BACKEND REFETCH");
    jobService
      .getJobs(jobsInquiry)
      .then((data) => {
        dispatch(setJobs(data));
      })
      .catch((err) => console.log(err));
  }, [jobsInquiry]);

  useEffect(() => {
    if (searchText === "") {
      setSearchText("");
      setJobsInquiry({ ...jobsInquiry, search: "" });
    }
  }, [searchText]);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const sortingHandler = (sort: JobSort) => {
    setFilterName(sort === JobSort.createdAt ? "New" : "Views");
    setJobsInquiry({ ...jobsInquiry, sort: sort, page: 1 });
    setAnchorEl(null);
  };

  const paginationHandler = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setJobsInquiry({ ...jobsInquiry, page: value });
  };

  const start = (jobsInquiry.page - 1) * jobsInquiry.limit + 1;
  const end = Math.min(jobsInquiry.page * jobsInquiry.limit, jobs.total);

  return (
    <div className="job-list">
      <OtherHeader />

      <Container className="container">
        {/* Filter (LEFT) */}
        <Filter
          jobsInquiry={jobsInquiry}
          setJobsInquiry={setJobsInquiry}
          setSearchText={setSearchText}
        />

        {/* Result (RIGHT) */}
        <Stack className="result-box">
          <Stack className="top">
            <span className="result-count">
              Showing{" "}
              <b>
                {start}-{end}
              </b>{" "}
              of <b>{jobs.total}</b> jobs
            </span>
            <Box className="result-filter">
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
                    id={"new"}
                    disableRipple
                    onClick={() => sortingHandler(JobSort.createdAt)}
                  >
                    New
                  </MenuItem>
                  <MenuItem
                    id={"views"}
                    disableRipple
                    onClick={() => sortingHandler(JobSort.jobViews)}
                  >
                    Views
                  </MenuItem>
                </Menu>
              </div>
            </Box>
          </Stack>
          <Stack className="wrapper">
            {jobs && jobs.list.length !== 0 ? (
              jobs.list.map((job: Job) => <JobCard job={job} />)
            ) : (
              <div className="no-data">
                <InfoOutlinedIcon />
                <span>No data found!</span>
              </div>
            )}
          </Stack>
          <Stack className="pagination-box">
            <Pagination
              color="primary"
              count={Math.ceil(jobs.total / jobsInquiry.limit)}
              page={jobsInquiry.page}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default JobList;
