import axios from "axios";
import { http } from "./constants";

export const maleQuestionCount = async (userCredential) => {
  try {
    const res = await axios.patch(
      `${http}/api/v1/malequestion/${userCredential.ques}`,
    );
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const femaleQuestionCount = async (userCredential) => {
  try {
    const res = await axios.patch(
      `${http}/api/v1/femalequestion/${userCredential.ques}`,
    );
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const maleQuestionOptionCount = async (userCredential) => {
  try {
    const res = await axios.patch(
      `${http}/api/v1/malequestion/${userCredential.ques}/answers`,
      userCredential
    );
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const femaleQuestionOptionCount = async (userCredential) => {
  try {
    const res = await axios.patch(
      `${http}/api/v1/femalequestion/${userCredential.ques}/answers`,
      userCredential
    );
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const createDetail = async (userCredential) => {
  try {
    const res = await axios.post(
      `${http}/api/v1/detail`,
      userCredential
    );
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

