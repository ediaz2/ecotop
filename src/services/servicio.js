import { httpClient } from 'helpers/httpClient';

export const createService = async (payload) => {
  try {
    const { data } = await httpClient.post('servicio', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};
