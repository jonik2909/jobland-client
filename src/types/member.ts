import type { Background } from "./background";
import type { CategoryType, Country } from "./enums/common.enum";
import {
  MemberFeatured,
  MemberSort,
  MemberStatus,
  MemberType,
} from "./enums/member.enum";

export interface Member {
  id: string;
  memberNick: string;
  memberPhone: string;
  memberType: MemberType;
  memberAge: number;
  memberViews: number;
  memberStatus: MemberStatus;
  memberEmail?: string;
  memberImage?: string;
  memberWebsite?: string;
  memberTeamSize?: string;
  memberCountry?: Country;
  memberCity?: string;
  memberDesc?: string;
  memberSalary?: string;
  memberExperience?: string;
  memberLanguage?: string;
  memberHourRate?: number;
  memberCategory?: CategoryType;
  memberFeatured: MemberFeatured;
  createdAt: Date;

  activeJobs: number;
  membeBackgrounds?: Background[];
}

export interface MembersInquiry {
  page: number;
  limit: number;
  sort?: MemberSort;
  memberType?: MemberType;
  memberCategory?: CategoryType;
  memberFeatured?: MemberFeatured;
  search?: string;
}

export interface MemberSignup {
  memberNick: string;
  memberPassword: string;
  memberPhone: string;
  memberType: MemberType;
}

export interface MemberUpdate {
  memberNick?: string;
  memberPhone?: string;
  memberAge?: number;
  memberEmail?: string;
  memberImage?: string;
  memberWebsite?: string;
  memberTeamSize?: string;
  memberCountry?: Country;
  memberCity?: string;
  memberDesc?: string;
  memberSalary?: string;
  memberExperience?: string;
  memberLanguage?: string;
  memberHourRate?: number;
  memberCategory?: CategoryType;
}

/** ADMIN DASHBOARD **/
export interface AdminMembersInquiry {
  page: number;
  limit: number;
  sort?: MemberSort;
  memberType?: MemberType;
  memberCategory?: CategoryType;
  memberFeatured?: MemberFeatured;
  memberStatus?: MemberStatus;
  search?: string;
}

export interface AdminMemberUpdate {
  memberStatus?: MemberStatus;
  memberType?: MemberType;
  memberFeatured?: MemberFeatured;
}
