import {
  Stack,
  Box,
  Menu,
  MenuItem,
  Pagination,
  Container,
} from "@mui/material";
import OtherHeader from "../../components/headers/OtherHeader";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CompanyCard from "../../components/card/CompanyCard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Filter from "./Filter";
import { useState } from "react";

const companies = [1, 2, 3, 4, 5, 6, 7, 8];

export default function CompanyList() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div className="company-list">
      <OtherHeader />
      <Container className="container">
        <Filter />
        <Stack className="result-box">
          <Stack className="top">
            <span className="result-count">
              Showing <b>0 Companies</b> of <b>0</b> total
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
            {companies && companies.length !== 0 ? (
              companies.map(() => <CompanyCard />)
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
}
