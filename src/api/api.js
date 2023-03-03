import axios from "axios";

export function api() {
  return axios.create({
    baseURL: "https://nn-demirci.jotform.dev/intern-api/",
  });
}
