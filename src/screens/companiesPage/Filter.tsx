import {
  Stack,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  SvgIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { MembersInquiry } from "../../types/member";
import { CategoryType } from "../../types/enums/common.enum";
import { formatEnum } from "../../lib/config";
import { useState } from "react";

interface FilterProps {
  companiesInquiry: MembersInquiry;
  setCompaniesInquiry: (value: MembersInquiry) => void;
  setSearchText: (value: string) => void;
}

export default function Filter(props: FilterProps) {
  const { companiesInquiry, setCompaniesInquiry, setSearchText } = props;
  const [category, setCategory] = useState("All");

  const categoryHandler = (e: any) => {
    const value = e.target.value;
    setCategory(value);

    setCompaniesInquiry({
      ...companiesInquiry,
      memberCategory: value === "All" ? undefined : value,
      page: 1,
    });
  };

  const searchEnterHandler = (e: any) => {
    if (e.key === "Enter") {
      setCompaniesInquiry({
        ...companiesInquiry,
        search: e.target.value,
        page: 1,
      });
    }
  };
  return (
    <Stack className="filter-box">
      <Stack className="filter">
        <Box className="select-box">
          <strong className="title">Search by Keywords</strong>
          <TextField
            variant="outlined"
            placeholder="Job title, keywords, or company"
            onChange={(e: any) => setSearchText(e.target.value)}
            onKeyDown={searchEnterHandler}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        <Box className="select-box">
          <strong className="title">Category</strong>
          <FormControl fullWidth>
            <Select
              displayEmpty
              value={category}
              onChange={categoryHandler}
              inputProps={{ "aria-label": "Without label" }}
              renderValue={(value) => {
                return (
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <SvgIcon
                      color="primary"
                      style={{ width: "18px", height: "18px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_7_5305)">
                          <path
                            d="M17.788 4.23633H12.9797V3.18839C12.9797 2.01428 12.0164 1.05908 10.8324 1.05908H7.65533C6.47135 1.05908 5.50807 2.01428 5.50807 3.18839V4.23633H0.699759C0.406069 4.23633 0.167969 4.47244 0.167969 4.76367V14.3438C0.167969 15.7758 1.34291 16.9409 2.78704 16.9409H15.7007C17.1448 16.9409 18.3198 15.7758 18.3198 14.3438V4.76367C18.3198 4.47244 18.0817 4.23633 17.788 4.23633ZM10.4505 11.1182C10.4505 11.7779 9.90917 12.3147 9.24386 12.3147C8.57856 12.3147 8.03723 11.7779 8.03723 11.1182V9.92162H10.4505V11.1182ZM10.9823 8.86693H7.50544C7.21175 8.86693 6.97365 9.10304 6.97365 9.39428V10.3522C3.88118 9.6866 1.56296 7.69753 1.2647 5.29102H17.223C16.9247 7.69753 14.6065 9.6866 11.5141 10.3522V9.39431C11.5141 9.10304 11.276 8.86693 10.9823 8.86693ZM6.57161 3.18839C6.57161 2.59583 7.05778 2.11377 7.6553 2.11377H10.8324C11.4299 2.11377 11.9161 2.59583 11.9161 3.18839V4.23633H6.57158V3.18839H6.57161ZM17.2562 14.3438C17.2562 15.1943 16.5584 15.8862 15.7007 15.8862H2.78704C1.92937 15.8862 1.23155 15.1943 1.23155 14.3438V8.01049C1.66088 8.61929 2.21444 9.18148 2.88319 9.67883C4.04203 10.5407 5.45677 11.139 6.99648 11.4343C7.15198 12.5264 8.10027 13.3694 9.24386 13.3694C10.3875 13.3694 11.3357 12.5264 11.4912 11.4343C13.031 11.139 14.4457 10.5407 15.6045 9.67883C16.2733 9.18148 16.8268 8.61926 17.2562 8.01049V14.3438Z"
                            fill="#696969"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_7_5305">
                            <rect
                              width="18.1518"
                              height="18"
                              fill="white"
                              transform="translate(0.167969)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </SvgIcon>
                    {formatEnum(value)}
                  </Box>
                );
              }}
            >
              <MenuItem value={"All"}>
                <em>All</em>
              </MenuItem>
              {Object.keys(CategoryType).map((category) => (
                <MenuItem value={category}>
                  <em>{formatEnum(category)}</em>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Stack>
  );
}
