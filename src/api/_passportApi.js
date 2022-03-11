import axios from "axios";
import { apiUrl, headers } from "@/config/_api";
import { handleError } from "@/api/_handleApi";

/*** Profile ***/

const getProfileInformation = () => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.get(`${apiUrl}/users/me`, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response.data)
		.catch((error) => handleError(error))
}

/**
 *
 * @param profile
 */
const updateProfile = (profile) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.put(`${apiUrl}/profile`, { profile }, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

/*** Friends ***/

/**
 * Search user with his username
 *
 * @param search
 * @returns {Promise<AxiosResponse<any>>}
 */
const searchFriend = (search) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.post(`${apiUrl}/users/search`, { search }, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response.data)
		.catch((error) => handleError(error))
}

/**
 * Get all friends
 */
const getFriends = () => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.get(`${apiUrl}/followers`, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 * Delete user from friends list
 *
 * @param userId
 * @returns {Promise<AxiosResponse<any>|void>}
 */
const removeFriend = (userId) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.delete(`${apiUrl}/followers/${userId}`)
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 * Send friend request to another user
 *
 * @param userId
 * @returns {Promise<AxiosResponse<any>|void>}
 */
const requestFriend = (userId) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.post(`${apiUrl}/followers`, {}, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 * Respond to a friend request with a boolean
 *
 * @param userId
 * @param response
 */
const responseToFriendRequest = (userId, response) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.put(`${apiUrl}/followers/${userId}`, { response }, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

export {
	getProfileInformation,
	updateProfile,
	searchFriend,
	getFriends,
	removeFriend,
	requestFriend,
	responseToFriendRequest
}