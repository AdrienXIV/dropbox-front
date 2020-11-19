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
        'Baerer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU2NTE5Mi4yNTAxNDcyODk1LCJlbWFpbCI6ImFkcmlfMDBAaG90bWFpbC5mciIsInVzZXJuYW1lIjoiQWRyaWVuIiwiaWF0IjoxNjA1NzgzODg5LCJleHAiOjE2MDU4NzAyODl9.5X5_qPmJOZIhUA0pzeA9n4Lf6nUq3tyHXV7RGbXvIl4Md2pJEd8KXucmruBpm0rt',
    },
  });
};
/**
 * PATCH
 */

/**
 * DELETE
 */
