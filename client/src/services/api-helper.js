import axios from 'axios';


const baseURL = "https://cross-promote.herokuapp.com/"


// Use 3000 for local editing
// const baseURL = "http://localhost:3000"

const api = axios.create({
  baseURL: baseURL
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

export const getAllDepartments = async (id) => {
  const resp = await api.get(`/businesses/${id}/departments`);
  return resp.data;
}

export const getDepartment = async (id, getData) => {
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

export const showEmployee = async (businessId, departmentId, employeeId) => {
  const resp = await api.get(`/businesses/${businessId}/departments/${departmentId}/employees/${employeeId}`);
  return resp.data
}

export const postEmployee = async (businessId, departmentId, postData) => {
  const resp = await api.post(`/businesses/${businessId}/departments/${departmentId}/employees`, postData);
  return resp.data
}

export const putEmployee = async (businessId, departmentId, employeeId, putData) => {
  const resp = await api.put(`/businesses/${businessId}/departments/${departmentId}/employees/${employeeId}`, putData);
  return resp.data
}

export const destroyEmployee = async (businessId, departmentId, id) => {
  const resp = await api.delete(`/businesses/${id}/departments/${id}/employees/${id}`);
  return resp.data
}