import { PlayerLoadoutGun } from "./PlayerLoadoutGun"
import { PlayerLoadoutIdentity } from "./PlayerLoadoutIdentity"
import { PlayerLoadoutSpray } from "./PlayerLoadoutSpray"

export interface PlayerLoadoutResponse {
    Subject: string
    Version: number
    Guns: PlayerLoadoutGun[]
    Sprays: PlayerLoadoutSpray[]
    Identity: PlayerLoadoutIdentity
    Incognito: boolean
}
