import axios from "axios";
import { apiUrl, requestOptions } from "@/config/_api";

/*** Travels ***/

const getPopularTravels = () => {

}

/**
 *
 * @param travelId
 */
const getTravelDetails = (travelId) => {

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

}

/**
 *
 * @param travelId
 */
const removeTravel = (travelId) => {

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

}

export {
	getPopularTravels,
	getTravelDetails,
	createTravel,
	updateTravel,
	removeTravel,
	followTravel,
	createStep,
	updateStep,
	removeStep
}