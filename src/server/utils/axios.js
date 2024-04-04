import axios from "axios";

const http = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "*",
		"Access-Control-Allow-Methods": "*",
	}
})

export default http;