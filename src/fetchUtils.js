const uuidV4 = require('uuid/v4');

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

export function get(endpoint) {
	const init = {
		accept: "application/json"
	};
	return fetch(`/api/${endpoint}`, init)
		.then(checkStatus)
		.then(parseJSON)
		.catch(err => console.log(err));
}

export function parseJSON(response) {
  return response.json();
}

export function generateUUID(): string {
	return uuidV4();
}