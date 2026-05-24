import { getHeaders, serverApi } from "../lib/config";
import axios from "axios";
import type { Application, ApplicationsInquiry } from "../types/application";
import type { TResponse } from "../types/response";

class ApplicationService {
  private readonly path: string;

  constructor() {
    this.path = serverApi + "/application";
  }

  public async submitApplication(jobId: string): Promise<Application> {
    try {
      const response = await axios.post(
        `${this.path}/submit`,
        {
          jobId: jobId,
        },
        {
          headers: { ...getHeaders() },
        },
      );
      console.log("submitApplication:", response);

      return response.data;
    } catch (err) {
      console.log("Error, submitApplication:", err);
      throw err;
    }
  }

  public async getMyApplications(
    query: ApplicationsInquiry,
  ): Promise<TResponse<Application>> {
    try {
      const response = await axios.get(`${this.path}/my`, {
        params: query,
        headers: { ...getHeaders() },
      });
      console.log("getMyApplications:", response);

      return response.data;
    } catch (err) {
      console.log("Error, getMyApplications:", err);
      throw err;
    }
  }

  public async deleteApplication(id: string): Promise<void> {
    try {
      const response = await axios.post(
        `${this.path}/delete/${id}`,
        {},
        {
          headers: { ...getHeaders() },
        },
      );
      console.log("deleteApplication:", response);

      return response.data;
    } catch (err) {
      console.log("Error, deleteApplication:", err);
      throw err;
    }
  }
}

const applicationService = new ApplicationService();
export default applicationService;
