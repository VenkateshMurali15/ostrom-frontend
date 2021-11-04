import axios from "axios";

class Api {
  static axiosInstance;

  static init() {
    this.axiosInstance = axios.create({
      baseURL: "https://ostrom-backend.herokuapp.com/api/v1",
    });
  }

  static async get(url) {
    return await Api.axiosInstance.get(url);
  }

  static async post(url, data) {
    return (await Api.axiosInstance.post) < DataType > (url, data);
  }

  static async put(url, data) {
    return (await Api.axiosInstance.put) < DataType > (url, data);
  }

  static async delete(url, data) {
    return (await Api.axiosInstance.delete) < DataType > (url, data);
  }
}

export default Api;
