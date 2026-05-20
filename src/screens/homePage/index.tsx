import JobCategories from "./JobCategories";
import FeaturedJobs from "./FeaturedJobs";
import Advertisement from "./Advertisement";
import TopCompanies from "./TopCompanies";
import HomeHeader from "../../components/headers/HomeHeader";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { setFeaturedJobs } from "./state";
import jobService from "../../services/JobService";
import { JobSort } from "../../types/enums/job.enum";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // (1) GET DATA FROM BACKEND
    jobService
      .getJobs({
        page: 1,
        limit: 4,
        sort: JobSort.jobViews,
      })
      .then((data) => {
        // (2) REDUX STORE SLICE
        dispatch(setFeaturedJobs(data.list));
      })
      .catch((err) => console.log(err));
  }, []);

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
