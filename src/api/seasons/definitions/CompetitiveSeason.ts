import { Border } from "./Border"

export interface CompetitiveSeason {
  uuid: string
  startTime: string
  endTime: string
  seasonUuid: string
  competitiveTiersUuid: string
  borders: Border[]
  assetPath: string
}
