import axios from 'axios';
import { URL_API } from '../info';

// définition de l'url de l'api comme base afin d'éviter de la réecrire
axios.defaults.baseURL = URL_API;
const token =
  'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU2NTE5Mi4yNTAxNDcyODk1LCJlbWFpbCI6ImFkcmlfMDBAaG90bWFpbC5mciIsInVzZXJuYW1lIjoiQWRyaWVuIiwiaWF0IjoxNjA2NjQ3NzM3LCJleHAiOjE2MDY3MzQxMzd9.nFxtXaBKjdRfzWODg-LEwSdN4K_1RXel1n8YaQ5KUqvB8kD4_Aqt2HyQa903keL2';

/**
 * GET
 */
export const getFiles = (path: string) => {
  return axios.get('/share/files', {
    params: { path },
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
