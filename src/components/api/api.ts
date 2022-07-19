import { PostUser } from '../../react-app-env';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const serverRequest = async (specify : string) => {
  const result = await fetch(`${BASE_URL}${specify}`);

  return result.json();
};

// eslint-disable-next-line consistent-return
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

  return result.json();
}
