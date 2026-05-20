import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Stack, Box, Container } from "@mui/material";
import { Link } from "react-router";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { useAppSelector } from "../../hooks";
import { selectTopCompanies } from "./state";
import type { Member } from "../../types/member";
import { getImageUrl } from "../../lib/config";

export default function TopCompanies() {
  const topCompanies = useAppSelector(selectTopCompanies);

  return (
    <Stack className="top-companies">
      <Container className="container">
        <Stack className="info-sec">
          <Box className="left">
            <span className="title">Top Company Registered</span>
            <p className="desc">
              Some of the companies we've helped recruit excellent applicants
              over the years.
            </p>
          </Box>
          <Box className="right">
            <Link to={"/companies"}>Browse All</Link>
            <ChevronRightIcon />
          </Box>
        </Stack>
        <Stack className="wrapper">
          <Swiper
            className={"company-swiper"}
            slidesPerView={"auto"}
            spaceBetween={15}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2000,
            }}
          >
            {topCompanies.map((company: Member) => (
              <SwiperSlide className={"company-slide"} key={"index"}>
                <Link to={`/companies/${company.id}`}>
                  <Box className="home-company-card">
                    <img
                      src={getImageUrl(company.memberImage)}
                      alt=""
                      className="logo"
                    />
                    <strong>{company.memberNick}</strong>

                    <div>
                      <img src="/icons/location.svg" alt="" />
                      <span>{company.memberCity || "-"}</span>
                    </div>

                    <button>{company.activeJobs} Open Position</button>
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Container>
    </Stack>
  );
}
