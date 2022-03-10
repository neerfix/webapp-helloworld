// Api URL
const apiUrl = process.env.REACT_APP_API_URL

// Authentication Token
const authentication = JSON.parse(localStorage.getItem('authentication'))

// Request options for all requests in application (headers)
const requestOptions = {
	headers: {
		'Content-Type': 'application/json',
		...(authentication && { 'Authorization': `Bearer ${authentication.accessToken}` })
	}
}

export {
	apiUrl,
	requestOptions
}