import axios from 'axios';
import { URL_API } from '../info';

// définition de l'url de l'api comme base afin d'éviter de la réecrire
axios.defaults.baseURL = URL_API;

/**
 * GET
 */

/**
 * POST
 */
export const sendFiles = (data: any) => {
  return axios.post('/share/new-files', data, {
    headers: {
      authorization:
        'Baerer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU2NTE5Mi4yNTAxNDcyODk1LCJlbWFpbCI6ImFkcmlfMDBAaG90bWFpbC5mciIsInVzZXJuYW1lIjoiQWRyaWVuIiwiaWF0IjoxNjA1OTU0MTk1LCJleHAiOjE2MDYwNDA1OTV9.yIq31aOqqJ6kr7sIqgwl6qp6u8xK_e0TNqUui62AmWxKgjiCsEApwEC_o4y5AEXg',
    },
  });
};
/**
 * PATCH
 */

/**
 * DELETE
 */
