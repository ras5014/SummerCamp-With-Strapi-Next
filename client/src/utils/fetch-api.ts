const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL || "http://localhost:1337";
import axios from "axios";

export async function fetchApi(url, method, body) {
  const response = await axios({
    url: `${STRAPI_BASE_URL}${url}`,
    method,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  });
  return response.data;
}
