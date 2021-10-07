import axios from "axios";
import { URL } from "./urlActual";

const Axios = axios.create({
  baseURL: URL,
});

export default Axios;
