import {
  Stack,
  Box,
  Menu,
  MenuItem,
  Pagination,
  Container,
} from "@mui/material";
import OtherHeader from "../../components/headers/OtherHeader";
import { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Filter from "./Filter";
import CandidantCard from "../../components/card/CandidantCard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import memberService from "../../services/MemberService";
import type { Member, MembersInquiry } from "../../types/member";
import { MemberSort, MemberType } from "../../types/enums/member.enum";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectCandidants, setCandidants } from "./state";

export default function CandidantList() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const candidants = useAppSelector(selectCandidants);
  const [searchText, setSearchText] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("New");
  const [candidantsInquiry, setCandidantsInquiry] = useState<MembersInquiry>({
    page: 1,
    limit: 6,
    memberType: MemberType.CANDIDATE,
  });

  useEffect(() => {
    memberService
      .getMembers(candidantsInquiry)
      .then((data) => dispatch(setCandidants(data)))
      .catch((err) => console.log(err));
  }, [candidantsInquiry]);

  useEffect(() => {
    if (searchText === "") {
      setSearchText("");
      setCandidantsInquiry({ ...candidantsInquiry, search: "" });
    }
  }, [searchText]);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const sortingHandler = (sort: MemberSort) => {
    setFilterName(sort === MemberSort.createdAt ? "New" : "Views");
    setCandidantsInquiry({ ...candidantsInquiry, sort: sort, page: 1 });
    setAnchorEl(null);
  };

  const paginationHandler = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCandidantsInquiry({ ...candidantsInquiry, page: value });
  };

  const start = (candidantsInquiry.page - 1) * candidantsInquiry.limit + 1;
  const end = Math.min(
    candidantsInquiry.page * candidantsInquiry.limit,
    candidants.total,
  );

  return (
    <div className="candidate-list">
      <OtherHeader />
      <Container className="container">
        <Filter
          candidantsInquiry={candidantsInquiry}
          setCandidantsInquiry={setCandidantsInquiry}
          setSearchText={setSearchText}
        />
        <Stack className="result-box">
          <Stack className="top">
            <span className="result-count">
              Showing{" "}
              <b>
                {start}-{end}
              </b>{" "}
              of <b>{candidants.total}</b> companies
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
                      sx: { width: anchorEl && anchorEl.offsetWidth },
                    },
                  }}
                >
                  <MenuItem
                    id={"new"}
                    disableRipple
                    onClick={() => sortingHandler(MemberSort.createdAt)}
                  >
                    New
                  </MenuItem>
                  <MenuItem
                    id={"views"}
                    disableRipple
                    onClick={() => sortingHandler(MemberSort.memberViews)}
                  >
                    Views
                  </MenuItem>
                </Menu>
              </div>
            </Box>
          </Stack>
          <Stack className="wrapper">
            {candidants && candidants.list.length !== 0 ? (
              candidants.list.map((candidant: Member) => (
                <CandidantCard candidant={candidant} />
              ))
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
              count={Math.ceil(candidants.total / candidantsInquiry.limit)}
              page={candidantsInquiry.page}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
