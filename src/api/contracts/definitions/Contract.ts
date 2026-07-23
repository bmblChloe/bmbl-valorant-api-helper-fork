import { Content } from "./Content"

export interface Contract {
  uuid: string
  displayName: string
  displayIcon: string
  shipIt: boolean
  useLevelVPCostOverride: boolean
  levelVPCostOverride: number
  freeRewardScheduleUuid: string
  content: Content
  assetPath: string
}
