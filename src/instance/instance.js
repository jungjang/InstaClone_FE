import axios from "axios";

export const instance = axios.create({
  baseURL: "url",
  //headers의 역할은 나중에 물어봅시당
  headers: {},
});
