import axios from "axios";
import { apiUrl, requestOptions } from "@/config/_api";
import { handleError } from "@/api/_handleApi";

/*** Travels ***/

const getPopularTravels = () => {
	return axios.get(`${apiUrl}/travels`, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 * Get travel details
 *
 * @param travelId
 */
const getTravelDetails = (travelId) => {
	return axios.get(`${apiUrl}/travels/${travelId}`, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

const createTravel = () => {

}

const updateTravel = () => {

}

/**
 *
 * @param travelId
 */
const followTravel = (travelId) => {
	return axios.put(`${apiUrl}/travels/${travelId}/follow`, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 *
 * @param travelId
 */
const unfollowTravel = (travelId) => {
	return axios.put(`${apiUrl}/travels/${travelId}/unfollow`, requestOptions)
		.then((response) => response)
		.catch((error) => handleError(error))
}

/**
 *
 * @param travelId
 */
const removeTravel = (travelId) => {
	return axios.delete(`${apiUrl}/travels/${travelId}`, requestOptions)
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
	return axios.delete(`${apiUrl}/steps/${stepId}`, requestOptions)
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