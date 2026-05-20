import JobCategories from "./JobCategories";
import FeaturedJobs from "./FeaturedJobs";
import Advertisement from "./Advertisement";
import TopCompanies from "./TopCompanies";
import HomeHeader from "../../components/headers/HomeHeader";
import { useEffect } from "react";
import type { Job } from "../../types/job";
import { useAppDispatch } from "../../hooks";
import { setFeaturedJobs } from "./state";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // (1) GET DATA FROM BACKEND
    const data: Job[] = [
      {
        appliedCount: null,
        company: {
          activeJobs: 1,
          // @ts-ignore
          createdAt: "2026-05-12T23:54:09.704385",
          id: "bc412f59-59d6-4912-895f-9d3b55944386",
          membeBackgrounds: null,
          memberAge: 0,
          memberCategory: null,
          memberCity: null,
          memberCountry: null,
          memberDesc: null,
          memberEmail: null,
          memberExperience: null,
          // @ts-ignore
          memberFeatured: "NO",
          memberHourRate: null,
          memberImage: null,
          memberLanguage: null,
          memberNick: "mashaqqat",
          memberPhone: "0102211445474",
          memberSalary: null,
          // @ts-ignore
          memberStatus: "ACTIVE",
          memberTeamSize: null,
          // @ts-ignore
          memberType: "COMPANY",
          memberViews: 0,
          memberWebsite: null,
        },
        companyId: "bc412f59-59d6-4912-895f-9d3b55944386",
        // @ts-ignore
        createdAt: "2026-05-12T23:55:38.436639",
        id: "17c0aaf9-c9c1-41d5-891c-1c7156469138",
        jobAddress: "Amir Temur Street, 108",
        // @ts-ignore
        jobCategory: "MOBILE_DEVELOPMENT",
        jobCity: "Tashkent",
        // @ts-ignore
        jobCountry: "UZBEKISTAN",
        jobDeadline: "2026-05-01",
        jobDesc:
          "We are looking for an experienced Java Developer to join our team...",
        jobExperience: "1-4",
        jobExpertise: "Strong knowledge of multithreading and microservices.",
        jobHourRate: 50.0,
        // @ts-ignore
        jobLevel: "JUNIOR",
        jobRequirement:
          "At least 5 years of experience in Java, Spring Boot, and MySQL.",
        jobSalary: "5000",
        // @ts-ignore
        jobStatus: "ACTIVE",
        jobTitle: "Junior Java Developer",
        // @ts-ignore
        jobType: "FULL_TIME",
        jobViews: 2,
        meApplied: null,
      },
      {
        appliedCount: null,
        company: {
          activeJobs: 1,
          // @ts-ignore
          createdAt: "2026-05-06T03:17:26.623124",
          id: "032e910b-a644-4999-bf59-819d85ebaa2f",
          membeBackgrounds: null,
          memberAge: 0,
          // @ts-ignore
          memberCategory: "WEB_DEVELOPMENT",
          memberCity: null,
          memberCountry: null,
          memberDesc: null,
          memberEmail: null,
          memberExperience: null,
          // @ts-ignore
          memberFeatured: "NO",
          memberHourRate: null,
          memberImage: null,
          memberLanguage: null,
          memberNick: "devex",
          memberPhone: "010221144546",
          memberSalary: null,
          // @ts-ignore
          memberStatus: "ACTIVE",
          memberTeamSize: null,
          // @ts-ignore
          memberType: "COMPANY",
          memberViews: 2,
          memberWebsite: null,
        },
        companyId: "032e910b-a644-4999-bf59-819d85ebaa2f",
        // @ts-ignore
        createdAt: "2026-05-12T23:29:47.710082",
        id: "5a95b9a6-a7f6-40ef-956d-956cf8aacad4",
        jobAddress: "Amir Temur Street, 108",
        // @ts-ignore
        jobCategory: "MOBILE_DEVELOPMENT",
        jobCity: "Tashkent",
        // @ts-ignore
        jobCountry: "USA",
        jobDeadline: "2026-05-01",
        jobDesc:
          "We are looking for an experienced Java Developer to join our team...",
        jobExperience: "1-4",
        jobExpertise: "Strong knowledge of multithreading and microservices.",
        jobHourRate: 50.0,
        // @ts-ignore
        jobLevel: "JUNIOR",
        jobRequirement:
          "At least 5 years of experience in Java, Spring Boot, and MySQL.",
        jobSalary: "5000",
        // @ts-ignore
        jobStatus: "ACTIVE",
        jobTitle: "Senior Java Developer 10",
        // @ts-ignore
        jobType: "FREELANCE",
        jobViews: 1,
        meApplied: null,
      },
    ];

    // (2) REDUX STORE SLICE
    dispatch(setFeaturedJobs(data));
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
