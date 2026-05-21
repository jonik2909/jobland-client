import type { Job } from "./job";
import type { Member } from "./member";
import type { TResponse } from "./response";

/** HOME PAGE **/
export interface HomePageState {
  featuredJobs: Job[];
  topCompanies: Member[];
}

/** JOB PAGE **/
export interface JobsPageState {
  jobs: TResponse<Job>;
  jobDetail: Job | null;
  relatedJobs: Job[];
}

/** COMPANY PAGE **/
export interface CompaniesPageState {
  companies: TResponse<Member>;
  companyDetail: Member | null;
  companyJobs: Job[];
}

/** CANDIDANT PAGE **/
/** MY PAGE **/
/** COMPANY DASHBOARD **/
/** ADMIN DASHBOARD **/
