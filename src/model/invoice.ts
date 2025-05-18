import type { Client } from "@/model/client.ts";

interface Invoice {
  id: number;
  codInvoice: string;
  subTotalPrice: number;
  tax: number;
  totalPrice: number;
  emissionDate: Date;
  expirationDate: Date;
  creationDate: Date;
  modificationDate: Date;
  status: string;
  client: Client;
}
export type { Invoice };
