import type { Member } from "./member";
import type { Application } from "./application";
import type { JobLevel, JobStatus, JobType } from "./enums/job.enum";
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
