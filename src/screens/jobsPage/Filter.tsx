import {
  Stack,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  SvgIcon,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { AntSwitch } from "../../MaterialTheme/styled";
import { CategoryType, Country } from "../../types/enums/common.enum";
import { formatEnum } from "../../lib/config";
import { JobLevel, JobType } from "../../types/enums/job.enum";
import { useState } from "react";
import type { JobsInquiry } from "../../types/job";

interface FilterProps {
  jobsInquiry: JobsInquiry;
  setJobsInquiry: (value: JobsInquiry) => void;
  setSearchText: (value: string) => void;
}

export default function Filter(props: FilterProps) {
  const { jobsInquiry, setJobsInquiry, setSearchText } = props;
  const [location, setLocation] = useState("All");
  const [category, setCategory] = useState("All");

  const locationHandler = (e: any) => {
    const value = e.target.value;
    setLocation(value);

    setJobsInquiry({
      ...jobsInquiry,
      jobCountry: value === "All" ? undefined : value,
      page: 1,
    });
  };

  const categoryHandler = (e: any) => {
    const value = e.target.value;
    setCategory(value);

    setJobsInquiry({
      ...jobsInquiry,
      jobCategory: value === "All" ? undefined : value,
      page: 1,
    });
  };

  const typeHandler = (type: string) => {
    setJobsInquiry({
      ...jobsInquiry,
      jobType: jobsInquiry.jobType === type ? undefined : (type as JobType),
      page: 1,
    });
  };

  const levelHandler = (level: string) => {
    setJobsInquiry({
      ...jobsInquiry,
      jobLevel:
        jobsInquiry.jobLevel === level ? undefined : (level as JobLevel),
      page: 1,
    });
  };

  const searchEnterHandler = (e: any) => {
    if (e.key === "Enter") {
      setJobsInquiry({ ...jobsInquiry, search: e.target.value, page: 1 });
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
          <strong className="title">Location</strong>
          <FormControl fullWidth>
            <Select
              displayEmpty
              value={location}
              onChange={locationHandler}
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
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                      >
                        <path
                          d="M7.74774 0C3.57747 0 0.184814 3.36474 0.184814 7.50058C0.184814 10.4558 1.4325 13.4451 3.79298 16.1455C5.55603 18.1623 7.30325 19.305 7.37684 19.3527C7.48947 19.4257 7.61865 19.4622 7.74783 19.4622C7.87692 19.4622 8.0061 19.4257 8.11883 19.3527C8.19232 19.305 9.93982 18.1623 11.7029 16.1455C14.0635 13.4451 15.3113 10.4558 15.3113 7.50058C15.3112 3.36474 11.9182 0 7.74774 0ZM7.74774 17.9644C6.35678 16.9366 1.54079 12.9808 1.54079 7.50058C1.54079 4.10617 4.32516 1.34464 7.74774 1.34464C11.1706 1.34464 13.9552 4.10617 13.9552 7.50058C13.9552 12.9808 9.1388 16.9366 7.74774 17.9644Z"
                          fill="#696969"
                        />
                        <path
                          d="M7.74824 4.52246C6.09304 4.52246 4.74646 5.85787 4.74646 7.4994C4.74646 9.14049 6.09304 10.4756 7.74824 10.4756C9.40344 10.4756 10.7499 9.14049 10.7499 7.4994C10.7499 5.85796 9.40334 4.52246 7.74824 4.52246ZM7.74824 9.13099C6.84072 9.13099 6.10244 8.39906 6.10244 7.4994C6.10244 6.5993 6.84072 5.8671 7.74824 5.8671C8.65566 5.8671 9.39394 6.5993 9.39394 7.4994C9.39394 8.39906 8.65566 9.13099 7.74824 9.13099Z"
                          fill="#696969"
                        />
                      </svg>
                    </SvgIcon>
                    {value}
                  </Box>
                );
              }}
            >
              <MenuItem value={"All"}>
                <em>All</em>
              </MenuItem>

              {Object.keys(Country).map((country) => (
                <MenuItem value={country}>
                  <em>{country}</em>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
        <Box className="switch-box">
          <strong className="title no-mr">Job Type</strong>
          {Object.keys(JobType).map((type) => (
            <div className="switch">
              <AntSwitch
                checked={jobsInquiry.jobType === type}
                onChange={() => typeHandler(type)}
              />
              <Typography>{formatEnum(type)}</Typography>
            </div>
          ))}
        </Box>
        <Box className="switch-box" sx={{ mt: "40px" }}>
          <strong className="title  no-mr">Experience Level</strong>
          {Object.keys(JobLevel).map((level) => (
            <div className="switch small">
              <FormControlLabel
                label={level}
                control={
                  <Checkbox
                    checked={jobsInquiry.jobLevel === level}
                    name={level}
                    onChange={() => levelHandler(level)}
                  />
                }
              />
            </div>
          ))}
        </Box>

        <Stack className="tag-box">
          <strong className="title">Tags</strong>
          <Box className="wrapper">
            <div>app</div>
            <div>administrative</div>
            <div>android</div>
            <div>design</div>
          </Box>
        </Stack>
      </Stack>
      <Stack className="adv">
        <span>Recruiting?</span>
        <p>
          Advertise your jobs to millions of monthly users and search 15.8
          million CVs in our database.
        </p>
        <button>Start Recruiting Now</button>
        <img src="/icons/speaker.svg" alt="" />
      </Stack>
    </Stack>
  );
}
