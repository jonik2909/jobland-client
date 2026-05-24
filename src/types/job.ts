import type { Member } from "./member";
import type { Application } from "./application";
import type { JobLevel, JobSort, JobStatus, JobType } from "./enums/job.enum";
import type { CategoryType, Country } from "./enums/common.enum";

export interface Job {
  id: string;
  companyId: string;
  jobTitle: string;
  jobDesc: string;
  jobType: JobType;
  jobRequirement: string;
  jobExpertise: string;
  jobCountry: Country;
  jobCity: string;
  jobAddress: string;
  jobSalary: string;
  jobLevel: JobLevel;
  jobExperience: string;
  jobHourRate: number;
  jobDeadline: string;
  jobCategory: CategoryType;
  jobStatus: JobStatus;
  jobViews: number;
  createdAt: Date;

  company?: Member;
  appliedCount?: number;
  meApplied?: Application;
}

export interface JobsInquiry {
  page: number;
  limit: number;
  sort?: JobSort;
  companyId?: string;
  jobType?: JobType;
  jobLevel?: JobLevel;
  jobCountry?: Country;
  jobCategory?: CategoryType;
  search?: string;
}

/** COMPANY DASHBOARD **/
export interface CompanyJobCreate {
  jobTitle: string;
  jobDesc: string;
  jobType: JobType;
  jobRequirement: string;
  jobExpertise: string;
  jobSalary: string;
  jobLevel: JobLevel;
  jobExperience: string;
  jobHourRate: number;
  jobDeadline: string;
  jobCategory: CategoryType;
  jobCountry: Country;
  jobCity: string;
  jobAddress: string;
  jobStatus?: JobStatus;
}

export interface CompanyJobsInquiry {
  page: number;
  limit: number;
  sort?: JobSort;
  jobType?: JobType;
  jobLevel?: JobLevel;
  jobCountry?: Country;
  jobCategory?: CategoryType;
  jobStatus?: JobStatus;
  search?: string;
}
