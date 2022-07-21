const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const serverRequest = async (specify : string) => {
  const result = await fetch(`${BASE_URL}${specify}`);

  return result.json();
};

export async function postServerRequest(userBody: FormData) {
  const token = await serverRequest('token');

  const result = await fetch(`${BASE_URL}users`,
    {
      method: 'POST',
      headers: {
        Token: token.token,
      },
      body: userBody,
    });

  return (result.status);
}
