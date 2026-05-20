import { serverApi } from "../lib/config";
import axios from "axios";
import type { TResponse } from "../types/response";
import type { Member, MembersInquiry } from "../types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi + "/member";
  }

  public async getMembers(data: MembersInquiry): Promise<TResponse<Member>> {
    try {
      const response = await axios.get(`${this.path}/list`, { params: data });
      console.log("getMembers:", response);

      return response.data;
    } catch (err) {
      console.log("Error, getMembers:", err);
      throw err;
    }
  }
}

const memberService = new MemberService();
export default memberService;
