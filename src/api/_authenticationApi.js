import axios from "axios";
import { apiUrl, headers } from "@/config/_api";
import { handleError } from "@/api/_handleApi";

const checkEmailExist = (email) => {
	return axios.post(`${apiUrl}/users/checkEmail`, { email }, {
		headers: headers
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 *
 * @param email
 * @param password
 */
const login = (email, password) => {
	return axios.post(`${apiUrl}/auth/login`, { username: email, password }, {
		headers: headers
	})
		.then((response) => {
			localStorage.setItem('authentication', JSON.stringify(response.data.data))
			return response
		})
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
	}, {
		headers: headers
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

const forgetPassword = (email) => {
	return axios.post(`${apiUrl}/auth/register`, { email }, {
		headers: headers
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

const resetPassword = () => {

}

const logout = () => {
	localStorage.removeItem('authentication')
}

export {
	checkEmailExist,
	login,
	register,
	forgetPassword,
	resetPassword,
	logout
}
