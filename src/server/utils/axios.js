import axios from "axios";

const http = axios.create({
	baseURL: "https://localhost:3000",
	headers: {
		"Access-Control-Allow-Origin": "*",
	}
})

export default http;