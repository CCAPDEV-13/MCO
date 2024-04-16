import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		"Access-Control-Allow-Origin": "*",
		// "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
		"Access-Control-Allow-credentials": true,
		// "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, UPDATE, PATCH"
	}
})

export default http;