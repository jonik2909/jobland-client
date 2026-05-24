import type { ApplicationStatus } from "./enums/application.enum";
import type { Job } from "./job";
import type { Member } from "./member";

export interface Application {
  id: string;
  companyId: string;
  jobId: string;
  candidateId: string;
  applicationStatus: ApplicationStatus;
  createdAt: Date;

  company?: Member;
  job?: Job;
  candidate?: Member;
}

export interface ApplicationsInquiry {
  page: number;
  limit: number;
  applicationStatus?: ApplicationStatus;
}

export interface ApplicationStats {
  applied: number;
  approved: number;
  rejected: number;
}

export interface TApplicationResponse {
  list: Application[];
  total: number;
  stats: ApplicationStats;
}
