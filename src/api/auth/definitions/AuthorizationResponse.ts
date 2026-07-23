import { RegionResponse } from "./RegionResponse";
import { RiotAuthorization } from "./RiotAutorization";

export interface AuthorizationResponse {
    status: number
    cookies: string[]
    data: RiotAuthorization
}
