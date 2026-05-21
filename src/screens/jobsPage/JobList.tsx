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
import type { Job } from "../../types/job";

const JobList = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const jobs = useAppSelector(selectJobs);

  useEffect(() => {
    jobService
      .getJobs({
        page: 1,
        limit: 6,
        sort: JobSort.createdAt,
      })
      .then((data) => {
        dispatch(setJobs(data));
      })
      .catch((err) => console.log(err));
  }, []);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div className="job-list">
      <OtherHeader />

      <Container className="container">
        {/* Filter (LEFT) */}
        <Filter />

        {/* Result (RIGHT) */}
        <Stack className="result-box">
          <Stack className="top">
            <span className="result-count">
              Showing <b>0 Jobs</b> of <b>1</b> page
            </span>
            <Box className="result-filter">
              <div className="sort-box">
                <div onClick={sortingClickHandler}>
                  New <KeyboardArrowDownRoundedIcon />
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
                  <MenuItem id={"new"} disableRipple>
                    New
                  </MenuItem>
                  <MenuItem id={"views"} disableRipple>
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
            <Pagination color="primary" count={1} page={1} />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default JobList;
