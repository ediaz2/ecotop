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
    const { data } = await httpClient.put(
      'servicio/' + payload.idServicio,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const getServicesByUser = async (idCorePersona, idEstadoServicio) => {
  try {
    console.log(idCorePersona + '-' + idEstadoServicio);
    const { data } = await httpClient.get('servicio', {
      params: { idCorePersona, idEstadoServicio },
    });
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};
