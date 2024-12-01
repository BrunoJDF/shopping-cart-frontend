import axios from "axios";
const maxRetries = 3;
const retryDelay = 1000; // 1 second

export const fetchData = async <T>(url: string): Promise<T> => {
  for (let attemp = 1; attemp <= maxRetries; attemp++) {
    try {
      const response = await axios.get<T>(url);
      return response.data;
    } catch (error) {
      if (attemp < maxRetries) {
        console.log(`Retrying ${attemp} of ${maxRetries}`);
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      } else {
        throw new Error(`Error fetching data from ${url} after ${maxRetries} attempts`);
      }
    }
  }
  throw new Error(`Error fetching data from ${url}`);
};

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
