import axios from "axios";

export class Api {
  static headers = async () => {
    let headers = {};
    return headers;
  };

  static get = (route, options, headers) =>
    Api.xhr({ route, method: "GET", options, headersIncome: headers });

  static put = (route, data, options, headers) =>
    Api.xhr({ route, method: "PUT", data, options, headersIncome: headers });

  static post = (route, data, options, headers) =>
    Api.xhr({ route, method: "POST", data, options, headersIncome: headers });

  static delete = (route, options, headers) =>
    Api.xhr({ route, method: "DELETE", options, headersIncome: headers });

  static xhr({ route, method, data, options = {}, headersIncome = {} }) {
    options = {
      needLoader: true,
      showErrNotif: true,
      onUploadProgress: (p) => {},
      ...options,
    };
    if (options.needLoader) {
      // to track if request is pending (works with multiple requests - value grater then 0 is true)
    }
    return Api.headers()
      .then((headers) =>
        axios({
          method,
          url: route,
          headers: { ...headers, ...headersIncome },
          data: data,
        })
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });
  }
}
