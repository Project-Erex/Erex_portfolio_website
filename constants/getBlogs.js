import axios from "axios";
import {base_url} from "./API";

export async function getBlogs() {
  try {
    // Fetch data from external API
    const res = await axios.get(`${base_url}/user/blogs`);

    if (res.status === 200) {
      return res?.data?.response?.data;
    } else {
      console.error("Non-200 status code received:", res.status);
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
