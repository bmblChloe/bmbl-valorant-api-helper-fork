import { HttpClient } from "../../http/http-client.js";
import { BuddyResponse } from "./definitions/BuddyResponse";

export async function getBuddies(uuid?: string): Promise<BuddyResponse> {

  const client = new HttpClient();
  const url = uuid ? `https://valorant-api.com/v1/buddies/${uuid}` : 'https://valorant-api.com/v1/buddies'
  let { status, data } = await client.get(url);

  if (Array.isArray(data)) {
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
