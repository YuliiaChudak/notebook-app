import { API } from './consts';
import axios from 'axios';

export const deletePerson = id => {
    const url = `${API}/api/notes/${id}`;

    console.log(id, 'DELETED')
    return axios.delete(url);
};

export const getPersonsRequest = async () => {
    const url = `${API}/api/notes`;
    return axios.get(url);
};

export const getRolesRequest = async () => {
    const url = `${API}/api/roles`;
    return axios.get(url);
};

export const getPersonsByBirthdayRequest = async date => {
    const url = `${API}/api/notes?birthday=${date}`;
    return axios.get(url);
};

export const sendCongratulationRequest = async (id, message) => {
    const url = `${API}/sms/send`;

    return axios.post(url, { id, message });
};
