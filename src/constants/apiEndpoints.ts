const apiBaseUrl = import.meta.env.VITE_API_URL;

const apiEndpoints = {
  getChallenges: `${apiBaseUrl}challenges`,
};

export default apiEndpoints;
