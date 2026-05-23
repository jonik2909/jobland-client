import { getHeaders, serverApi } from "../lib/config";
import axios from "axios";

class UploadService {
  private readonly path: string;

  constructor() {
    this.path = serverApi + "/upload";
  }

  public async uploadImage(target: string, file: File): Promise<string> {
    try {
      const formData = new FormData();
      formData.append("target", target);
      formData.append("image", file);

      const response = await axios.post(`${this.path}/image`, formData, {
        headers: {
          ...getHeaders(),
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("uploadImage:", response);

      return response.data.path;
    } catch (err) {
      console.log("Error, uploadImage:", err);
      throw err;
    }
  }
}

const uploadService = new UploadService();
export default uploadService;
