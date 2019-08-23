// @flow
const getUrl = (endpoint: string): string => `${process.env.REACT_APP_RESUME_API_URL}/${endpoint}`;

const handleResponse = (response: Response): Response => {
  if (response.ok) {
    return response;
  }
  throw Error(response.statusText);
}

export default {
  getResume: () => 
    fetch(getUrl('resume'))
      .then(response => handleResponse(response))
      .then(response => response.json())
}