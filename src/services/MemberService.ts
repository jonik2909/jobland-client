import { serverApi } from "../lib/config";
import axios from "axios";
import type { TResponse } from "../types/response";
import type { Member, MemberSignup, MembersInquiry } from "../types/member";
import Cookies from "universal-cookie";

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

  public async getMember(memberId: string): Promise<Member> {
    try {
      const response = await axios.get(`${this.path}/${memberId}`);
      console.log("getMember:", response);

      return response.data;
    } catch (err) {
      console.log("Error, getMember:", err);
      throw err;
    }
  }

  public async login(nick: string, password: string): Promise<Member> {
    try {
      const response = await axios.post(`${this.path}/login`, {
        memberNick: nick,
        memberPassword: password,
      });
      console.log("login:", response);

      const member: Member = response.data.member;
      const token: string = response.data.token;

      const cookies = new Cookies();
      cookies.set("accessToken", token);
      localStorage.setItem("memberData", JSON.stringify(member));

      return response.data.member;
    } catch (err) {
      console.log("Error, login:", err);
      throw err;
    }
  }

  public async signup(data: MemberSignup): Promise<Member> {
    try {
      const response = await axios.post(`${this.path}/signup`, data);
      console.log("signup:", response);

      const member: Member = response.data.member;
      const token: string = response.data.token;

      const cookies = new Cookies();
      cookies.set("accessToken", token);
      localStorage.setItem("memberData", JSON.stringify(member));

      return response.data.member;
    } catch (err) {
      console.log("Error, signup:", err);
      throw err;
    }
  }
}

const memberService = new MemberService();
export default memberService;
