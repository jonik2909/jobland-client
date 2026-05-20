import {
  Box,
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
import { AntSwitch } from "../../MaterialTheme/styled";
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

export default function MemberList() {
  const [filterName, setFilterName] = useState<string>("All");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [typeAnchor, setTypeAnchor] = useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const [statusAnchor, setStatusAnchor] = useState<{
    [key: string]: HTMLElement | null;
  }>({});

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const typeClickHandler = (e: any, key: string) => {
    setTypeAnchor({ ...typeAnchor, [key]: e.currentTarget });
  };

  const statusClickHandler = (e: any, key: string) => {
    setStatusAnchor({ ...statusAnchor, [key]: e.currentTarget });
  };

  return (
    <Stack className="tab-content">
      <span className="main-title">All Members</span>
      <span className="main-desc">Ready to jump back in?</span>
      <Stack className="content">
        <Stack className="wrap">
          <Box className="filter-box">
            <span className="title">All Members</span>
            <div className="filter">
              <div className="sort-box">
                <div onClick={sortingClickHandler}>
                  {filterName} <KeyboardArrowDownRoundedIcon />
                </div>
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
                <MenuItem disableRipple>All</MenuItem>
                <MenuItem disableRipple>TYPE</MenuItem>
              </Menu>
            </div>
          </Box>
          <Box className="table-wrap">
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Member Nick</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">Featured</StyledTableCell>
                    <StyledTableCell align="center">Type</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell>
                      <div className="img-box">
                        <img
                          src="/icons/default-user.svg"
                          alt=""
                          className="user-img"
                        />
                        <span>Jonibek</span>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      +998901234567
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="switch-box">
                        <AntSwitch checked={true} />
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <span
                        onClick={(e: any) => typeClickHandler(e, "member?.id")}
                      >
                        COMPANY
                      </span>
                      <Menu
                        sx={{ mt: "20px" }}
                        anchorEl={typeAnchor["member?.id"]}
                        open={Boolean(typeAnchor["member?.id"])}
                        onClose={() => setTypeAnchor({})}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <MenuItem>TYPE</MenuItem>
                      </Menu>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div
                        className={`status-badge active`}
                        onClick={(e: any) => statusClickHandler(e, "member.id")}
                      >
                        ACTIVE
                      </div>
                      <Menu
                        sx={{ mt: "20px" }}
                        anchorEl={statusAnchor["member.id"]}
                        open={Boolean(statusAnchor["member.id"])}
                        onClose={() => setStatusAnchor({})}
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
                    <StyledTableCell>
                      <div className="img-box">
                        <img
                          src="/icons/default-user.svg"
                          alt=""
                          className="user-img"
                        />
                        <span>Admin</span>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      +998901234568
                    </StyledTableCell>
                    <StyledTableCell align="center">-</StyledTableCell>
                    <StyledTableCell align="center">
                      <span>ADMIN</span>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div className={`status-badge active`}>ACTIVE</div>
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
