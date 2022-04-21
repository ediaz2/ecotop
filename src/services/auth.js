import { httpClient } from 'helpers/httpClient';

export const authLogin = async (payload) => {
  try {
    const { data } = await httpClient.post('auth/signin', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return [data.token, null];
  } catch (error) {
    return [null, error];
  }
};

export const authRegister = async (payload) => {
  try {
    const { data } = await httpClient.post('auth/signup', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return [data.token, null];
  } catch (error) {
    return [null, error];
  }
};

export const getCurrentUser = async (token) => {
  try {
    const { idCorePersona } = JSON.parse(atob(token.split('.')[1]));
    const { data } = await httpClient.get(`corePersona/${idCorePersona}`);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const updateUser = async (user, id) => {
  try {
    const { data } = await httpClient.put(`corePersona/${id}`, user);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};
