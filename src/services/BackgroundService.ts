import { getHeaders, serverApi } from "../lib/config";
import axios from "axios";
import type { Background, BackgroundInput } from "../types/background";

class BackgroundService {
  private readonly path: string;

  constructor() {
    this.path = serverApi + "/background";
  }

  public async createBackground(data: BackgroundInput): Promise<Background> {
    try {
      const response = await axios.post(`${this.path}/create`, data, {
        headers: { ...getHeaders() },
      });
      console.log("createBackground:", response);

      return response.data;
    } catch (err) {
      console.log("Error, createBackground:", err);
      throw err;
    }
  }

  public async updateBackground(data: BackgroundInput): Promise<Background> {
    try {
      const response = await axios.post(
        `${this.path}/update/${data.id}`,
        data,
        {
          headers: { ...getHeaders() },
        },
      );
      console.log("updateBackground:", response);

      return response.data;
    } catch (err) {
      console.log("Error, updateBackground:", err);
      throw err;
    }
  }

  public async deleteBackground(id: string): Promise<void> {
    try {
      const response = await axios.post(
        `${this.path}/delete/${id}`,
        {},
        {
          headers: { ...getHeaders() },
        },
      );
      console.log("deleteBackground:", response);

      return response.data;
    } catch (err) {
      console.log("Error, deleteBackground:", err);
      throw err;
    }
  }

  public async getMyBackgrounds(): Promise<Background[]> {
    try {
      const response = await axios.get(`${this.path}/my`, {
        headers: { ...getHeaders() },
      });
      console.log("getMyBackgrounds:", response);

      return response.data;
    } catch (err) {
      console.log("Error, getMyBackgrounds:", err);
      throw err;
    }
  }
}

const backgroundService = new BackgroundService();
export default backgroundService;
