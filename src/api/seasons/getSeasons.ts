import { HttpClient } from "../../http/http-client.js";
import { SeasonResponse } from "./definitions/SeasonResponse";

export async function getSeasons(uuid?: string): Promise<SeasonResponse> {
    const client = new HttpClient();
    const url = uuid ? `https://valorant-api.com/v1/seasons/${uuid}` : 'https://valorant-api.com/v1/seasons';
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
