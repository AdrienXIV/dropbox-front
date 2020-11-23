import axios from 'axios';
import { URL_API } from '../info';

// définition de l'url de l'api comme base afin d'éviter de la réecrire
axios.defaults.baseURL = URL_API;
const token =
  'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU2NTE5Mi4yNTAxNDcyODk1LCJlbWFpbCI6ImFkcmlfMDBAaG90bWFpbC5mciIsInVzZXJuYW1lIjoiQWRyaWVuIiwiaWF0IjoxNjA2MTU3OTk1LCJleHAiOjE2MDYyNDQzOTV9.hlhHiMTuK-ubpo2Y4Cb7-81eb2yZNTHaXIibi7-1mE-GxGmyrIPuts9jbkaX2-cB';

/**
 * GET
 */
export const getFiles = () => {
  return axios.get('/share/files', {
    headers: {
      authorization: `Baerer ${token}`,
    },
  });
};

export const getFile = (fileName: string) => {
  return axios.get(`/share/files/${fileName}`, {
    headers: {
      authorization: `Baerer ${token}`,
    },
    responseType: 'blob',
  });
};

/**
 * POST
 */
export const sendFiles = (data: any) => {
  return axios.post('/share/new-files', data, {
    headers: {
      authorization: `Baerer ${token}`,
    },
  });
};
/**
 * PATCH
 */

/**
 * DELETE
 */
