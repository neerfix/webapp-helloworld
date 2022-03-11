import axios from "axios";
import { apiUrl, headers } from "@/config/_api";
import { handleError } from "@/api/_handleApi";

const getProfileInformation = (uuid) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.get(`${apiUrl}/users/${uuid}`, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response.data)
		.catch((error) => handleError(error))
}

export {
	getProfileInformation
}