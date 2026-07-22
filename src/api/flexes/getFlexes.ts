import { HttpClient } from "../../http/http-client.js";
import { FlexResponse } from "./definitions/FlexResponse";

export async function getFlexes(uuid?: string): Promise<FlexResponse> {

  const client = new HttpClient();
  const url = uuid ? `https://valorant-api.com/v1/flex/${uuid}` : 'https://valorant-api.com/v1/flex'
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
