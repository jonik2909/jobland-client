import axios from "axios";
import { serverApi, getHeaders } from "../lib/config";
import type { TResponse } from "../types/response";
import type {
  CompanyJobCreate,
  CompanyJobsInquiry,
  CompanyJobUpdate,
  Job,
} from "../types/job";

class CompanyService {
  private readonly path: string;

  constructor() {
    this.path = serverApi + "/company";
  }

  public async createJob(data: CompanyJobCreate): Promise<TResponse<Job>> {
    try {
      const result = await axios.post(`${this.path}/job/create`, data, {
        headers: { ...getHeaders() },
      });
      console.log("createJob:", result);

      return result.data;
    } catch (err) {
      console.log("Error, createJob:", err);
      throw err;
    }
  }

  public async getCompanyJobs(
    data: CompanyJobsInquiry,
  ): Promise<TResponse<Job>> {
    try {
      const result = await axios.get(`${this.path}/job/list`, {
        headers: { ...getHeaders() },
        params: data,
      });
      console.log("getCompanyJobs:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getCompanyJobs:", err);
      throw err;
    }
  }

  public async updateJob(data: CompanyJobUpdate): Promise<Job> {
    try {
      const result = await axios.post(
        `${this.path}/job/update/${data.id}`,
        data,
        {
          headers: { ...getHeaders() },
        },
      );
      console.log("updateJob:", result);

      return result.data;
    } catch (err) {
      console.log("Error, updateJob:", err);
      throw err;
    }
  }
}

const companyService = new CompanyService();
export default companyService;
