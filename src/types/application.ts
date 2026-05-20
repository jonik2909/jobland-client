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
