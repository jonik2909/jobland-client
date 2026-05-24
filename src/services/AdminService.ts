import axios from "axios";
import { getHeaders, serverApi } from "../lib/config";
import type { TResponse } from "../types/response";
import type {
  AdminMembersInquiry,
  AdminMemberUpdate,
  Member,
} from "../types/member";
import type { JobStatus } from "../types/enums/job.enum";
import type { AdminJobsInquiry, Job } from "../types/job";

class AdminService {
  private readonly path: string;

  constructor() {
    this.path = serverApi + "/admin";
  }

  public async getAllMembers(
    data: AdminMembersInquiry,
  ): Promise<TResponse<Member>> {
    try {
      const result = await axios.get(`${this.path}/member/list`, {
        params: data,
        headers: { ...getHeaders() },
      });
      console.log("getMembers:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getMembers:", err);
      throw err;
    }
  }

  public async updateAdminMember(
    id: string,
    data: AdminMemberUpdate,
  ): Promise<Boolean> {
    try {
      const result = await axios.post(
        `${this.path}/member/update/${id}`,
        data,
        { headers: { ...getHeaders() } },
      );
      console.log("updateMember:", result);

      return result.data;
    } catch (err) {
      console.log("Error, updateMember:", err);
      throw err;
    }
  }

  public async getAllJobs(data: AdminJobsInquiry): Promise<TResponse<Job>> {
    try {
      const result = await axios.get(`${this.path}/job/list`, {
        params: data,
        headers: { ...getHeaders() },
      });
      console.log("getJobs:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getJobs:", err);
      throw err;
    }
  }

  public async updateAdminJob(id: string, status: JobStatus): Promise<Boolean> {
    try {
      const result = await axios.post(
        `${this.path}/job/update/${id}`,
        { jobStatus: status },
        { headers: { ...getHeaders() } },
      );
      console.log("updateAdminJob:", result);

      return result.data;
    } catch (err) {
      console.log("Error, updateAdminJob:", err);
      throw err;
    }
  }
}

const adminService = new AdminService();
export default adminService;
