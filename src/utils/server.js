import { API } from './consts';
import axios from 'axios';

export const deletePerson = id => {
  const url = `${API}/api/notes/${id}`;

  return axios.delete(url);
};

export const getPersonsRequest = async query => {
  let url = `${API}/api/persons`;

  if (query) {
    url += `?${query}`;
  }

  return axios.get(url);
};

export const getNoteByIdRequest = async id => {
  const url = `${API}/api/notes/${id}`;
  return axios.get(url);
};

export const getRolesRequest = async () => {
  const url = `${API}/api/roles`;
  return axios.get(url);
};

export const getPersonsByBirthdayRequest = async () => {
  const url = `${API}/api/persons/birthday`;
  return axios.get(url);
};

export const sendCongratulationRequest = async (id, message) => {
  const url = `${API}/sms/send`;

  return axios.post(url, { id, message });
};

export const addNoteRequest = async payload => {
  const url = `${API}/api/notes`;

  return axios.post(url, payload);
};

export const updateNoteRequest = async (id, payload) => {
  const url = `${API}/api/notes/${id}`;

  return axios.put(url, payload);
};
