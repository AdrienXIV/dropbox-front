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
export const register = (data: any) => {
  return axios.post(
    `/auth/register`,
    data
  );
}
export const login = (data: any) => {
  return axios.post(
    `/auth/login`,
    data
  );
}


/**
 * PATCH
 */

/**
 * DELETE
 */
