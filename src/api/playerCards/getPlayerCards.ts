import { HttpClient } from "../../http/http-client.js";
import { PlayerCardResponse } from "./definitions/PlayerCardResponse.js";

export async function getPlayerCards(uuid?: string): Promise<PlayerCardResponse> {
    const client = new HttpClient();
    const url = uuid ? `https://valorant-api.com/v1/playercards/${uuid}` : 'https://valorant-api.com/v1/playercards';
    let {status, data} = await client.get(url);

    if(Array.isArray(data)) {
        return {
            status: status,
            data: data
        };
    } else {
        return {
            status: status,
            data: [data]
        }
    }
}
