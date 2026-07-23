import { Chapter } from "./Chapter"

export interface Content {
  relationType: string
  relationUuid: string
  chapters: Chapter[]
  premiumRewardScheduleUuid: string
  premiumVPCost: number
}
