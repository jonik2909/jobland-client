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
import { useEffect, useState } from "react";
import memberService from "../../services/MemberService";
import { MemberSort, MemberType } from "../../types/enums/member.enum";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectCompanies, setCompanies } from "./state";
import type { Member, MembersInquiry } from "../../types/member";

export default function CompanyList() {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectCompanies);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("New");
  const [companiesInquiry, setCompaniesInquiry] = useState<MembersInquiry>({
    page: 1,
    limit: 6,
    sort: MemberSort.createdAt,
    memberType: MemberType.COMPANY,
  });

  useEffect(() => {
    memberService
      .getMembers(companiesInquiry)
      .then((data) => dispatch(setCompanies(data)))
      .catch((err) => console.log(err));
  }, [companiesInquiry]);

  useEffect(() => {
    if (searchText === "") {
      setSearchText("");
      setCompaniesInquiry({ ...companiesInquiry, search: "" });
    }
  }, [searchText]);

  const sortingClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const sortingHandler = (sort: MemberSort) => {
    setFilterName(sort === MemberSort.createdAt ? "New" : "Views");
    setCompaniesInquiry({ ...companiesInquiry, sort: sort, page: 1 });
    setAnchorEl(null);
  };

  const paginationHandler = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCompaniesInquiry({ ...companiesInquiry, page: value });
  };

  const start = (companiesInquiry.page - 1) * companiesInquiry.limit + 1;
  const end = Math.min(
    companiesInquiry.page * companiesInquiry.limit,
    companies.total,
  );

  return (
    <div className="company-list">
      <OtherHeader />
      <Container className="container">
        <Filter
          companiesInquiry={companiesInquiry}
          setCompaniesInquiry={setCompaniesInquiry}
          setSearchText={setSearchText}
        />
        <Stack className="result-box">
          <Stack className="top">
            <span className="result-count">
              Showing{" "}
              <b>
                {start}-{end}
              </b>{" "}
              of <b>{companies.total}</b> companies
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
            {companies && companies.list.length !== 0 ? (
              companies.list.map((company: Member) => (
                <CompanyCard company={company} />
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
              count={Math.ceil(companies.total / companiesInquiry.limit)}
              page={companiesInquiry.page}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
