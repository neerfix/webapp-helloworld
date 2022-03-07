import axios from "axios";
import { apiUrl, requestOptions } from "@/config/_api";

/*** Profile ***/

const getProfileInformation = () => {

}

/**
 *
 * @param username
 * @param email
 * @param phone
 * @param description
 * @param links
 * @param visibility
 * @param albumSpotlight
 */
const updateProfile = ({ username, email, phone, description, links, visibility, albumSpotlight }) => {

}

/*** Friends ***/

/**
 * Search user with his username
 *
 * @param search
 */
const searchFriend = (search) => {

}

/**
 * Get all friends
 */
const getFriends = () => {

}

/**
 * Delete user from friends list
 *
 * @param userId
 */
const removeFriend = (userId) => {

}

/**
 * Send friend request to another user
 *
 * @param userId
 */
const requestFriend = (userId) => {

}

/**
 * Respond to a friend request with a boolean
 *
 * @param userId
 * @param response
 */
const responseToFriendRequest = (userId, response) => {

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