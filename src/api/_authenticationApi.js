import axios from "axios";
import { apiUrl, requestOptions } from "@/config/_api";
import { handleError } from "@/api/_handleApi";

const checkEmailExist = (email) => {
	return axios.post(`${apiUrl}/users/checkEmail`, { email }, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 *
 * @param email
 * @param password
 */
const login = (username, password) => {
	return axios.post(`${apiUrl}/auth/login`, { username, password }, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 *
 * @param email
 * @param password
 * @param username
 * @param birthdate
 * @returns {Promise<AxiosResponse<any>>}
 */
const register = (email, password, username, birthdate) => {
	return axios.post(`${apiUrl}/users`, {
		email,
		password,
		username,
		birthDate: birthdate,
		is_verified: false
	}, requestOptions)
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
	return localStorage.removeItem('authentication')
}

export {
	checkEmailExist,
	login,
	register,
	forgetPassword,
	resetPassword,
	logout
}
