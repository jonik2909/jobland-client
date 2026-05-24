import type { BackgroundType } from "./enums/common.enum";

export interface Background {
  id: string;
  memberId: string;
  backName: string;
  backStart: string;
  backEnd: string;
  backDesc: string;
  backType: BackgroundType;
  createdAt: Date;
}

export interface BackgroundInput {
  id?: string;
  backName: string;
  backDesc: string;
  backType: BackgroundType;
  backStart: string;
  backEnd: string;
}
