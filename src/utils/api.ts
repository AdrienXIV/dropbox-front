import axios from 'axios';
import { URL_API } from '../info';
import { getCookie } from './cookie';

// définition de l'url de l'api comme base afin d'éviter de la réecrire
axios.defaults.baseURL = URL_API;
// ajout du token dans les requetes http
axios.defaults.headers = {
  authorization: getCookie('token') ? `Baerer ${getCookie('token')}` : undefined,
};

/**
 * GET
 */
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
/**
 * get
 */
export const getprofil = () => {
  return axios.get(`/user/getprofil`);
};
/**
 * PUT
 */
export const updateprofil = (data: any) => {
  return axios.put(`/user/editprofil`, data);
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

export const saveCodeFile = (data: { code: string; language: string; path: string }) => {
  return axios.post('/share/save-code-file', data);
};
/**
 * PATCH
 */
export const resetPassword = (data: any) => {
  return axios.patch(`/auth/reset-password`, data);
};

/**
 * DELETE
 */
export const removeProfile = () => {
  return axios.delete('/user/profile');
};
