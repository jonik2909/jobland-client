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
import { useState } from "react";

const jobs = [1, 2, 3, 4, 5, 6];

const JobList = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
            {/* {jobs && jobs.length !== 0 ? (
              jobs.map(() => <JobCard />)
            ) : (
              <div className="no-data">
                <InfoOutlinedIcon />
                <span>No data found!</span>
              </div>
            )} */}
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
