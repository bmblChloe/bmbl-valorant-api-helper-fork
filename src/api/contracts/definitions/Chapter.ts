import { Level } from "../../weapons"
import { Reward } from "./Reward"

export interface Chapter {
  isEpilogue: boolean
  levels: Level[]
  freeRewards: Reward[]
}
