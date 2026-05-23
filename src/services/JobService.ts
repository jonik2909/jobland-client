import { getHeaders, serverApi } from "../lib/config";
import type { Job, JobsInquiry } from "../types/job";
import axios from "axios";
import type { TResponse } from "../types/response";

class JobService {
  private readonly path: string;

  constructor() {
    this.path = serverApi + "/job";
  }

  public async getJobs(data: JobsInquiry): Promise<TResponse<Job>> {
    try {
      const response = await axios.get(`${this.path}/list`, { params: data });
      console.log("getJobs:", response);

      return response.data;
    } catch (err) {
      console.log("Error, getJobs:", err);
      throw err;
    }
  }

  public async getJob(jobId: string): Promise<Job> {
    try {
      const response = await axios.get(`${this.path}/${jobId}`, {
        headers: { ...getHeaders() },
      });

      return response.data;
    } catch (err) {
      console.log("Error, getJob:", err);
      throw err;
    }
  }
}

const jobService = new JobService();
export default jobService;
