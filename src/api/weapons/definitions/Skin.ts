import { Chroma } from "./Chroma"
import { WeaponLevel } from "./WeaponLevel"

export interface Skin {
    uuid: string
    displayName: string
    themeUuid: string
    contentTierUuid: string
    displayIcon: string
    wallpaper: string
    assetPath: string
    chromas: Chroma[]
    levels: WeaponLevel[]
}
