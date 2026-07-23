import { HttpClient } from "../../http/http-client.js";
import { CompetitiveSeasonResponse } from "./definitions/CompetitiveSeasonResponse";

export async function getCompetitiveSeasons(uuid?: string): Promise<CompetitiveSeasonResponse> {
    const client = new HttpClient();
    const url = uuid ? `https://valorant-api.com/v1/seasons/competitive/${uuid}` : 'https://valorant-api.com/v1/seasons/competitive';
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
