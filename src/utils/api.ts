import axios from "axios";

export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data from ${url}`);
  }
};

/*
export const postData = async <T>(url: string, data: T): Promise<void> => {
  try {
    await axios.post(url, data)
  } catch (error) {
    throw new Error(`Error posting data to ${url}`)
  }
}
*/

export const postData = async <T, R>(url: string, data: T): Promise<R> => {
  try {
    const response = await axios.post<R>(url, data);
    return response.data;
  } catch (error) {
    throw new Error(`Error posting data to ${url}`);
  }
};

export const patchData = async <T, R>(url: string, data: T): Promise<R> => {
  try {
    const response = await axios.patch<R>(url, data);
    return response.data;
  } catch (error) {
    throw new Error(`Error patching data to ${url}`);
  }
};
