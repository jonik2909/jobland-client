import type { ViewGroup } from "./enums/common.enum";

export interface View {
  id: string;
  memberId: string;
  viewRefId: string;
  viewGroup: ViewGroup;
  createdAt: Date;
}
