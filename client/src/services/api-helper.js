import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

// =========== Auth ================

export const loginBusiness = async (loginData) => {
  try {
    const resp = await api.post('/auth/login', loginData)
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.business
  }
  catch (e) {
    return ({ businessname: "", id: -1 })
  }
}

export const registerBusiness = async (registerData) => {
  try {
    const resp = await api.post('/businesses', { business: registerData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.business
  }
  catch (e) {
    return ({ businessname: "", id: null })
  }
}

export const verifyBusiness = async () => {
  const token = localStorage.getItem('authToken');

  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false;
}

// =========== Seeded Profiles ===========

export const getAllBusinesses = async () => {
  const resp = await api.get('/businesses');
  return resp.data;
}

export const getBusiness = async (id) => {
  const resp = await api.get(`/businesses/${id}`);
  return resp.data;
}

export const postBusiness = async (profileData) => {
  const resp = await api.post('/businesses', profileData);
  return resp.data;
}

export const putBusiness = async (profileData, id) => {
  const resp = await api.put(`/businesses/${id}`, profileData);
  return resp.data;
}

export const deleteBusiness = async (id) => {
  const resp = await api.delete(`/businesses/${id}`);
  return resp.data;
}

// ================== Seeded Departments ==================

export const getAllDepartments = async (id, getData) => {
  const resp = await api.get(`/businesses/${id}/departments`, getData);
  return resp.data;
}

export const getDepartments = async (id, getData) => {
  const resp = await api.get(`/businesses/:id/departments/${id}`, getData);
  return resp.data;
}

export const postDepartments = async (id, postData) => {
  const resp = await api.post(`/businesses/${id}/departments`, postData);
  return resp.data;
}

export const putDepartments = async (id, putData) => {
  const resp = await api.put(`/businesses/:id/departments/${id}`, putData);
  return resp.data;
}

export const deleteDepartments = async (id, deleteData) => {
  const resp = await api.delete(`/businesses/:id/departments/${id}`, deleteData)
  return resp.data
}

// ================== Seeded Employees ==================

export const indexEmployees = async (businessId, departmentId) => {
  const resp = await api.get(`/businesses/${businessId}/departments/${departmentId}/employees`, departmentId);
  return resp.data
}

export const showEmployees = async (id, getData) => {
  const resp = await api.get(`/businesses/${id}/departments/${id}/employees/${id}`, getData);
  return resp.data
}

export const postEmployees = async (businessId, departmentId, postData) => {
  const resp = await api.post(`/businesses/${businessId}/departments/${departmentId}/employees`, postData);
  return resp.data
}

export const putEmployees = async (businessId, putData) => {
  const resp = await api.put(`/businesses/${businessId}/departments/${putData.location_id}/employees/${putData.id}`, putData);
  return resp.data
}

export const destroyEmployees = async (id, deleteData) => {
  const resp = await api.delete(`/businesses/${id}/departments/${id}/employees/${id}`, deleteData);
  return resp.data
}