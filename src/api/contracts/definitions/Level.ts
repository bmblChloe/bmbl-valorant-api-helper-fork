import { Reward } from "./Reward"

export interface Level {
  reward: Reward
  xp: number
  vpCost: number
  isPurchasableWithVP: boolean
  doughCost: number
  isPurchasableWithDough: boolean
}
