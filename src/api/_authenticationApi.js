import axios from "axios";
import { apiUrl, requestOptions } from "@/config/_api";
import { handleError } from "@/api/_handleApi";

/**
 *
 * @param email
 * @param password
 */
const login = (email, password) => {
	return axios.post(`${apiUrl}/auth/login`, { email, password }, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 *
 * @param firstname
 * @param lastname
 * @param email
 * @param dateOfBirth
 */
const register = ({ firstname, lastname, email, dateOfBirth }) => {
	return axios.post(`${apiUrl}/auth/register`, {}, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

const forgetPassword = (email) => {
	return axios.post(`${apiUrl}/auth/register`, { email }, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

const resetPassword = () => {

}

const logout = () => {
	return axios.put(`${apiUrl}/auth/logout`, {}, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

export {
	login,
	register,
	forgetPassword,
	resetPassword,
	logout
}
