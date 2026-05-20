import {
  Stack,
  Box,
  Menu,
  MenuItem,
  Pagination,
  Container,
} from "@mui/material";
import OtherHeader from "../../components/headers/OtherHeader";
import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Filter from "./Filter";
import CandidantCard from "../../components/card/CandidantCard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function CandidantList() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div className="candidate-list">
      <OtherHeader />
      <Container className="container">
        <Filter />
        <Stack className="result-box">
          <Stack className="top">
            <span className="result-count">
              Showing <b>9 Candidates</b> of <b>9</b> total
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
                      sx: { width: anchorEl && anchorEl.offsetWidth },
                    },
                  }}
                >
                  <MenuItem onClick={() => setAnchorEl(null)} disableRipple>
                    New
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)} disableRipple>
                    Views
                  </MenuItem>
                </Menu>
              </div>
            </Box>
          </Stack>
          <Stack className="wrapper">
            {candidates && candidates.length !== 0 ? (
              candidates.map((val) => <CandidantCard key={val} />)
            ) : (
              <div className="no-data">
                <InfoOutlinedIcon />
                <span>No data found!</span>
              </div>
            )}
          </Stack>
          <Stack className="pagination-box">
            <Pagination color="primary" count={3} page={1} />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
