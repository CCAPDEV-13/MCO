import axios from "axios";
import "dotenv/config";

const http = axios.create({
	baseURL: process.env.API_URL,
})

export default http;