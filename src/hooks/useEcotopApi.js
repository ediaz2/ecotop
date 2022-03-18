import { useState } from 'react';

import { httpClient } from 'helpers/httpClient';

export const useEcotopApi = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = async (url, payload) => {
    setIsLoading(true);
    try {
      const res = await httpClient.post(`/${url}`, payload);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return [data, { auth }, isLoading, error];
};
