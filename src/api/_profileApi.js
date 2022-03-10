import axios from "axios";
import { apiUrl, requestOptions } from "@/config/_api";
import { handleError } from "@/api/_handleApi";

const getProfileInformation = (uuid) => {
	return axios.get(`${apiUrl}/users/${uuid}`, requestOptions)
		.then((response) => response.data)
		.catch((error) => handleError(error))
}

export {
	getProfileInformation
}