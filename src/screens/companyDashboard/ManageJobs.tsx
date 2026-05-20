import { useState } from "react";
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [statusAnchor, setStatusAnchor] = useState<[] | HTMLElement[]>([]);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const statusClickHandler = (e: any, index: number) => {
    const tempAnchor = statusAnchor.slice();
    tempAnchor[index] = e.currentTarget;
    setStatusAnchor(tempAnchor);
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
                  All <KeyboardArrowDownRoundedIcon />
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
                  <MenuItem id="All" disableRipple>
                    All
                  </MenuItem>
                  <MenuItem id="STATUS" disableRipple>
                    STATUS
                  </MenuItem>
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
                  <StyledTableRow>
                    <StyledTableCell>
                      <div className="my-job-title">
                        <p>Senior React Developer</p>
                        <div>
                          <img src="/icons/location.svg" alt="" />
                          <span>Seoul, South Korea</span>
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
                        3 Applied
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="date-box">
                        <p>April 25, 2026</p>
                        <p>May 25, 2026</p>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div
                        className={`status-badge active`}
                        onClick={(e: any) => statusClickHandler(e, 0)}
                      >
                        ACTIVE
                      </div>
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
                      <MenuItem>STATUS</MenuItem>
                    </Menu>
                    <StyledTableCell align="center">
                      <div className="job-action-box">
                        <div>
                          <RemoveRedEyeOutlinedIcon />
                        </div>
                        <div>
                          <EditOutlinedIcon />
                        </div>
                        <div>
                          <DeleteOutlineOutlinedIcon />
                        </div>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>
                      <div className="my-job-title">
                        <p>Product Manager</p>
                        <div>
                          <img src="/icons/location.svg" alt="" />
                          <span>Tashkent, Uzbekistan</span>
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
                        5 Applied
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="date-box">
                        <p>April 20, 2026</p>
                        <p>May 20, 2026</p>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div className={`status-badge pending`}>PENDING</div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="job-action-box">
                        <div>
                          <RemoveRedEyeOutlinedIcon />
                        </div>
                        <div>
                          <EditOutlinedIcon />
                        </div>
                        <div>
                          <DeleteOutlineOutlinedIcon />
                        </div>
                      </div>
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
