import type { Client } from "@/model/client";
import { fetchData, patchData, postData } from "@/utils/api";

const url = "/api/clients";
const getClients = async (): Promise<Client[]> => {
  return await fetchData<Client[]>(url);
};

const postClient = async (createClient: any): Promise<Client> => {
  return await postData<any, Client>(url, createClient);
};

const patchClient = async (updateClient: any): Promise<Client> => {
  return await patchData<any, Client>(url + "/" + updateClient.id, updateClient);
};

export { getClients, postClient, patchClient };
