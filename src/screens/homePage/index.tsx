import { Container } from "@mui/material";
import JobCategories from "./JobCategories";
import FeaturedJobs from "./FeaturedJobs";
import Advertisement from "./Advertisement";
import TopCompanies from "./TopCompanies";
import HomeHeader from "../../components/headers/HomeHeader";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeHeader />
      <JobCategories />
      <FeaturedJobs />
      <Advertisement />
      <TopCompanies />
    </div>
  );
};

export default HomePage;
