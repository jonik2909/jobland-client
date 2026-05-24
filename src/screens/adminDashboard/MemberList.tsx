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
import { useEffect, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useDispatch } from "react-redux";
import { errorToast, successToast } from "../../lib/Toastify";
import type {
  AdminMembersInquiry,
  AdminMemberUpdate,
  Member,
} from "../../types/member";
import {
  MemberFeatured,
  MemberSort,
  MemberStatus,
  MemberType,
} from "../../types/enums/member.enum";
import { selectAdminMembers, setAdminMembers } from "./state";
import adminService from "../../services/AdminService";
import { getImageUrl } from "../../lib/config";
import { useAppSelector } from "../../hooks";

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
  const dispatch = useDispatch();
  const adminMembers = useAppSelector(selectAdminMembers);
  const [statusAnchor, setStatusAnchor] = useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const [typeAnchor, setTypeAnchor] = useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const [filterName, setFilterName] = useState<string>("All");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [inquiry, setInquiry] = useState<AdminMembersInquiry>({
    page: 1,
    limit: 10,
    sort: MemberSort.createdAt,
  });

  useEffect(() => {
    adminService
      .getAllMembers(inquiry)
      .then((data) => {
        dispatch(setAdminMembers(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inquiry]);

  const typeClickHandler = (e: any, key: string) => {
    setTypeAnchor({ ...typeAnchor, [key]: e.currentTarget });
  };

  const typeCloseHandler = () => {
    setTypeAnchor({});
  };

  const statusClickHandler = (e: any, key: string) => {
    setStatusAnchor({ ...statusAnchor, [key]: e.currentTarget });
  };

  const statusCloseHandler = () => {
    setStatusAnchor({});
  };

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const sortingHandler = (value: string) => {
    setFilterName(value);
    setInquiry({
      ...inquiry,
      memberType: value === "All" ? undefined : (value as MemberType),
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

  const updateMemberHandler = async (
    memberId: string,
    updateData: AdminMemberUpdate,
  ) => {
    try {
      await adminService.updateAdminMember(memberId, updateData);

      setInquiry({ ...inquiry });

      successToast("Successfully updated!", 700);
    } catch (err) {
      console.log(err);
      errorToast(err);
    }
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
                  <MenuItem onClick={() => sortingHandler("All")} disableRipple>
                    All
                  </MenuItem>
                  {Object.values(MemberType).map((type: string) => (
                    <MenuItem
                      onClick={() => sortingHandler(type)}
                      id={type}
                      disableRipple
                    >
                      {type}
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
                    <StyledTableCell align="left">Member Nick</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">Featured</StyledTableCell>
                    <StyledTableCell align="center">Type</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {adminMembers.list.length > 0 ? (
                    adminMembers.list.map((member: Member) => {
                      return (
                        <StyledTableRow>
                          <StyledTableCell>
                            <div className="img-box">
                              <img
                                src={getImageUrl(member.memberImage)}
                                alt=""
                                className="user-img"
                              />
                              <span>{member.memberNick}</span>
                            </div>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {member.memberPhone}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {member.memberType === MemberType.COMPANY ? (
                              <div className="switch-box">
                                <AntSwitch
                                  checked={
                                    member.memberFeatured === MemberFeatured.YES
                                      ? true
                                      : false
                                  }
                                  onChange={(e: any) => {
                                    updateMemberHandler(member.id, {
                                      memberFeatured: e.target.checked
                                        ? MemberFeatured.YES
                                        : MemberFeatured.NO,
                                    });
                                  }}
                                />
                              </div>
                            ) : (
                              "-"
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {member.memberType === MemberType.ADMIN ? (
                              <span>{member.memberType}</span>
                            ) : (
                              <span
                                onClick={(e: any) =>
                                  typeClickHandler(e, member.id)
                                }
                              >
                                {member.memberType}
                              </span>
                            )}
                            <Menu
                              sx={{ mt: "20px" }}
                              anchorEl={typeAnchor[member?.id]}
                              open={Boolean(typeAnchor[member?.id])}
                              onClose={typeCloseHandler}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                              }}
                            >
                              {Object.values(MemberType)
                                .filter(
                                  (ele) =>
                                    ele !== MemberType.ADMIN &&
                                    ele !== member.memberType,
                                )
                                .map((type: MemberType) => {
                                  return (
                                    <MenuItem
                                      onClick={() => {
                                        typeCloseHandler();
                                        updateMemberHandler(member.id, {
                                          memberType: type,
                                        });
                                      }}
                                      key={type}
                                    >
                                      {type}
                                    </MenuItem>
                                  );
                                })}
                            </Menu>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <div
                              className={`status-badge ${member.memberStatus.toLowerCase()}`}
                              onClick={(e: any) =>
                                statusClickHandler(e, member.id)
                              }
                            >
                              {member.memberStatus}
                            </div>
                            <Menu
                              sx={{ mt: "20px" }}
                              anchorEl={statusAnchor[member.id]}
                              open={Boolean(statusAnchor[member.id])}
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
                              {Object.values(MemberStatus)
                                .filter((ele) => ele !== member.memberStatus)
                                .map((status: MemberStatus) => {
                                  return (
                                    <MenuItem
                                      onClick={() => {
                                        statusCloseHandler();
                                        updateMemberHandler(member.id, {
                                          memberStatus: status,
                                        });
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
              count={Math.ceil(adminMembers.total / inquiry.limit)}
              page={inquiry.page}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
