import axios from 'axios';
import { URL_API } from '../info';

// définition de l'url de l'api comme base afin d'éviter de la réecrire
axios.defaults.baseURL = URL_API;
const token =
  'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU2NTE5Mi4yNTAxNDcyODk1LCJlbWFpbCI6ImFkcmlfMDBAaG90bWFpbC5mciIsInVzZXJuYW1lIjoiQWRyaWVuIiwiaWF0IjoxNjA2MDQyODEzLCJleHAiOjE2MDYxMjkyMTN9.Q39UMVS0JrpB3XDZSjs4cSRsb-gHgukanqu0TcBerUgnEjFtf_vIJKKJ4UrH53wp';
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
