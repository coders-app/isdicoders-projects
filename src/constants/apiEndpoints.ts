const apiBaseUrl = import.meta.env.VITE_API_URL;

const apiEndpoints = {
  getChallenges: `${apiBaseUrl}challenges`,
  getChallengeById: (challengeId: string) =>
    `${apiBaseUrl}challenges/${challengeId}`,
  getProjectsByChallengeId: (challengeId: string) =>
    `${apiBaseUrl}projects/${challengeId}`,
};

export default apiEndpoints;
