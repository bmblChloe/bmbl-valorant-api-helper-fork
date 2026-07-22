import { HttpClient } from "../../http/http-client.js";
import { PlayerTitleResponse } from "./definitions/PlayerTitleResponse";

export async function getPlayerTitles(uuid?: string): Promise<PlayerTitleResponse> {
    const client = new HttpClient();
    const url = uuid ? `https://valorant-api.com/v1/playertitles/${uuid}` : 'https://valorant-api.com/v1/playertitles';
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
