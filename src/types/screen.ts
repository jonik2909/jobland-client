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
/** CANDIDANT PAGE **/
/** MY PAGE **/
/** COMPANY DASHBOARD **/
/** ADMIN DASHBOARD **/
