const BASE_URL = 'https://frontend-test-assignment-api.abz.agency';

export const serverRequest = async (specify : string) => {
  const result = await fetch(`${BASE_URL}/api/v1/${specify}`);

  return result.json();
};
