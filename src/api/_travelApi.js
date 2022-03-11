import axios from "axios";
import { apiUrl, headers } from "@/config/_api";
import { handleError } from "@/api/_handleApi";

/*** Travels ***/

const getPopularTravels = () => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.get(`${apiUrl}/travels`, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 * Get travel details
 *
 * @param travelId
 */
const getTravelDetails = (travelId) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.get(`${apiUrl}/travels/${travelId}`, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

const createTravel = (travel) => {
	return axios.post(`${apiUrl}/travels`, { travel }, {
		headers: headers
	})
		.then((response) => {
			return response
		})
		.catch((error) => handleError(error))
}

const updateTravel = () => {

}

/**
 *
 * @param travelId
 */
const followTravel = (travelId) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.put(`${apiUrl}/travels/${travelId}/follow`, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 *
 * @param travelId
 */
const unfollowTravel = (travelId) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.put(`${apiUrl}/travels/${travelId}/unfollow`, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 *
 * @param travelId
 */
const removeTravel = (travelId) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.delete(`${apiUrl}/travels/${travelId}`, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

/*** Steps ***/

/**
 *
 * @param title
 * @param startDate
 * @param endDate
 * @param description
 * @param album
 */
const createStep = ({ title, startDate, endDate, description, album }) => {

}

/**
 *
 * @param title
 * @param startDate
 * @param endDate
 * @param description
 * @param album
 */
const updateStep = ({ title, startDate, endDate, description, album }) => {

}

/**
 *
 * @param stepId
 */
const removeStep = (stepId) => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	return axios.delete(`${apiUrl}/steps/${stepId}`, {
		headers: {
			...headers,
			'Authorization': `Bearer ${authentication.accessToken}`
		}
	})
		.then((response) => response)
		.catch((error) => handleError(error))
}

export {
	getPopularTravels,
	getTravelDetails,
	createTravel,
	updateTravel,
	removeTravel,
	followTravel,
	unfollowTravel,
	createStep,
	updateStep,
	removeStep
}