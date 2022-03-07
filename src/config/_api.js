// Api URL
const apiUrl = process.env.REACT_APP_API_URL

// Authentication Token
const token = localStorage.getItem('token')

// Request options for all requests in application (headers)
const requestOptions = {
	headers: {
		'Content-Type': 'application/json',
		...(token && { 'Authorization': token })
	}
}

export {
	apiUrl,
	requestOptions
}