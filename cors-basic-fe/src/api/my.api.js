import { client } from "./index.api.js";

export const getMyMsg = async () => {
  try {
    const response = await client.get("/my");
    const result = response.data;
    console.log(result);

    return result;
  } catch (e) {
    console.error(e);
  }
};
