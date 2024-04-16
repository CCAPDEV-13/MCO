import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Expose-Headers": "*",
		"Access-Control-Request-Headers": "*",
		"Access-Control-Request-Method": "*",
	}
})

export default http;