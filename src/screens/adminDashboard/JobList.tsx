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
import { useState } from "react";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [statusAnchor, setStatusAnchor] = useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const [filterName, setFilterName] = useState("All");

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const statusClickHandler = (e: any, key: string) => {
    setStatusAnchor({ ...statusAnchor, [key]: e.currentTarget });
  };

  const statusCloseHandler = () => {
    setStatusAnchor({});
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
                  <MenuItem id={"All"} disableRipple>
                    All
                  </MenuItem>
                  <MenuItem disableRipple>TYPE</MenuItem>
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
                  <StyledTableRow>
                    <StyledTableCell>Senior React Developer</StyledTableCell>
                    <StyledTableCell align="center">Google</StyledTableCell>
                    <StyledTableCell align="center">
                      Development
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Link
                        component="button"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        15
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="center">FULL_TIME</StyledTableCell>
                    <StyledTableCell align="center">
                      <div
                        className={`status-badge active`}
                        onClick={(e) => statusClickHandler(e, "job.id")}
                      >
                        ACTIVE
                      </div>
                      <Menu
                        sx={{ mt: "20px" }}
                        anchorEl={statusAnchor["job.id"]}
                        open={Boolean(statusAnchor["job.id"])}
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
                        <MenuItem>STATUS</MenuItem>
                      </Menu>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Product Manager</StyledTableCell>
                    <StyledTableCell align="center">Amazon</StyledTableCell>
                    <StyledTableCell align="center">Management</StyledTableCell>
                    <StyledTableCell align="center">
                      <Link
                        component="button"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        32
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="center">PART_TIME</StyledTableCell>
                    <StyledTableCell align="center">
                      <div className={`status-badge pending`}>PENDING</div>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Stack className="pagination-box">
            <Pagination color="primary" count={5} page={1} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
