import { BuddyLevel } from "./BuddyLevel"

export interface Buddy {
  uuid: string
  displayName: string
  isHiddenIfNotOwned: boolean
  themeUuid: string
  displayIcon: string
  assetPath: string
  levels: BuddyLevel[]
}
