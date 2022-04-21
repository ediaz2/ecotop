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

export const updateService = async (payload) => {
  try {
    const { data } = await httpClient.put('servicio', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const getServicesByUser = async (idCorePersona) => {
  try {
    const { data } = await httpClient.get('servicio', {
      params: { idCorePersona },
    });
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};
