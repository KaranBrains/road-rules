import axios from "axios";

export const url = "http://localhost:8080/api";

export const signIn = (formData) => axios.post(`${url}/login`, formData);
export const signUp = (formData) => axios.post(`${url}/signup`, formData);
export const getEmailOtp = (email) =>
  axios.get(`${url}/get-email-otp?email=${email}`);
export const getPhoneOtp = (phone) =>
  axios.get(`${url}/get-phone-otp?phone=${phone}`);
export const verifyEmailOtp = (otp, email) =>
  axios.post(`${url}/verify-email-otp`, { otp, email });
export const verifyForgotEmailOtp = (otp, email) =>
  axios.post(`${url}/verify-forgot`, { otp, email });
export const verifyPhoneOtp = (otp, email, phone) =>
  axios.post(`${url}/verify-phone-otp?phone=${phone}&email=${email}`, {
    verificationCode: otp,
  });
export const changePassword = (body) =>
  axios.put(`${url}/change-password`, body);

export const addSlot = (formdata) => axios.post(`${url}/add-slot`, formdata);
export const addInstructor = (formdata) => axios.post(`${url}/add-instructor`, formdata);
