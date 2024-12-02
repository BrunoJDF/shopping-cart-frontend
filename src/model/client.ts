interface Client {
  id: number;
  name: string;
  lastName: string;
  fullName: string;
  ruc: string;
  email: string;
  phone: string;
  address: string;
  status: string;
}
export { type Client };

export const initialClient: Client = {
  id: 0,
  name: "",
  lastName: "",
  fullName: "",
  ruc: "",
  email: "",
  phone: "",
  address: "",
  status: "",
};
