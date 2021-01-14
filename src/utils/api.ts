import axios from 'axios';
import { URL_API } from '../info';
import { getCookie } from './cookie';

// définition de l'url de l'api comme base afin d'éviter de la réecrire
axios.defaults.baseURL = URL_API;
// ajout du token dans les requetes http
axios.defaults.headers = {
  authorization: getCookie('token') ? `Baerer ${getCookie('token')}` : undefined,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT, PATCH, OPTION',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
};

/**
 * GET
 */
export const checkToken = () => {
  return axios.get('/auth/check-token');
};

export const getFiles = (path: string) => {
  return axios.get('/share/files', {
    params: { path },
  });
};

export const getFile = (pathname: string, fileName: string) => {
  return axios.get(`/share/files/${fileName}`, {
    params: {
      pathname,
    },
  });
};

export const getprofil = () => {
  return axios.get(`/user`);
};
/**
 * PUT
 */
export const updateprofil = (data: any) => {
  return axios.put(`/user`, data);
};
/**
 * POST
 */
export const register = (data: any) => {
  return axios.post(`/auth/register`, data);
};
export const login = (data: any) => {
  return axios.post(`/auth/login`, data);
};
export const forgetPassword = (email: string) => {
  return axios.post(`/auth/forgot-password`, { email });
};
export const sendFiles = (data: any) => {
  return axios.post('/share/new-files', data);
};

export const sendFilesInFolder = (data: any) => {
  return axios.post('/share/new-folder', data);
};

/**
 * PUT
 */
export const resetPassword = (data: { password: string; confirm: string; str: string }) => {
  return axios.put(`/auth/reset-password/${data.str}`, data);
};

export const saveCodeFile = (data: { code: string; language: string; path: string }) => {
  return axios.put('/share/save-code-file', data);
};

/**
 * DELETE
 */
