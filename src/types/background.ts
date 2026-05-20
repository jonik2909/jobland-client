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
