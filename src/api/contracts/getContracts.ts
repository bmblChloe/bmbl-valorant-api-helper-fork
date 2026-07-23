import { HttpClient } from "../../http/http-client.js";
import { ContractResponse } from "./definitions/ContractResponse";

export async function getContracts(uuid?: string): Promise<ContractResponse> {

  const client = new HttpClient();
  const url = uuid ? `https://valorant-api.com/v1/contracts/${uuid}` : 'https://valorant-api.com/v1/contracts'
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
