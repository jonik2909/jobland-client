import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Stack, Box, Container } from "@mui/material";
import { Link } from "react-router";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const topCompanies = [1, 2, 3, 4, 5, 6, 7];

export default function TopCompanies() {
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
            {topCompanies.map(() => (
              <SwiperSlide className={"company-slide"} key={"index"}>
                <Link to={`/companies/companyId`}>
                  <Box className="home-company-card">
                    <img
                      src={"/icons/default-user.svg"}
                      alt=""
                      className="logo"
                    />
                    <strong>Company Name </strong>

                    <div>
                      <img src="/icons/location.svg" alt="" />
                      <span>London</span>
                    </div>

                    <button>20 Open Position</button>
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
