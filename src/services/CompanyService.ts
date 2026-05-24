import axios from "axios";
import { serverApi, getHeaders } from "../lib/config";
import type { TResponse } from "../types/response";
import type { CompanyJobCreate, Job } from "../types/job";

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
}

const companyService = new CompanyService();
export default companyService;
