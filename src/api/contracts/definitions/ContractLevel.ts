import { Reward } from "./Reward"

export interface ContractLevel {
  reward: Reward
  xp: number
  vpCost: number
  isPurchasableWithVP: boolean
  doughCost: number
  isPurchasableWithDough: boolean
}
