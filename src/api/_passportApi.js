import axios from "axios";
import { apiUrl, requestOptions } from "@/config/_api";
import { handleError } from "@/api/_handleApi";

/*** Profile ***/

const getProfileInformation = () => {
	return axios.get(`${apiUrl}/users/me`, requestOptions)
		.then((response) => response.data)
		.catch((error) => handleError(error))
}

/**
 *
 * @param profile
 */
const updateProfile = (profile) => {
	return axios.put(`${apiUrl}/profile`, { profile }, requestOptions)
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
	return axios.post(`${apiUrl}/users/search`, { search }, requestOptions)
		.then((response) => response.data)
		.catch((error) => handleError(error))
}

/**
 * Get all friends
 */
const getFriends = () => {
	return axios.get(`${apiUrl}/followers`, requestOptions)
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
	return axios.post(`${apiUrl}/followers`, {}, requestOptions)
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
	return axios.put(`${apiUrl}/followers/${userId}`, { response }, requestOptions)
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