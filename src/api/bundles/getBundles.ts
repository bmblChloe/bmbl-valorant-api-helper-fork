import { HttpClient } from "../../http/http-client.js";
import { BundleResponse } from "./definitions/BundleResponse";

export async function getBundles(uuid?: string): Promise<BundleResponse> {

  const client = new HttpClient();
  const url = uuid ? `https://valorant-api.com/v1/bundles/${uuid}` : 'https://valorant-api.com/v1/bundles'
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
