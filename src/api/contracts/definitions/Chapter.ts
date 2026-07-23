import { ContractLevel } from "./ContractLevel"
import { Reward } from "./Reward"

export interface Chapter {
  isEpilogue: boolean
  levels: ContractLevel[]
  freeRewards: Reward[]
}
