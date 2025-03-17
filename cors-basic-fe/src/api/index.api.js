import axios from "axios";
import { getMyMsg } from "./my.api";

const baseURL = "http://localhost:5090";
export const client = axios.create({ baseURL });

const api = {
  myAPI: { getMyMsg: getMyMsg },
};

export default api;
