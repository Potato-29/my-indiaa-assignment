import axios from "axios";
import { storeApi } from "../constants";

export default axios.create({
  baseURL: storeApi,
});
