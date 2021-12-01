import { Api } from "../services/api_service";

export const fetchCitiesNames = () => {
  let countries = [];
  const fetchAPI = async () => {
    try {
      let response = await Api.get(
        "https://6196f55daf46280017e7e349.mockapi.io/cities"
      );
      response = await response.data;
      response.map((country) => {
        let item = country.name;
        countries.push(item.toLowerCase());
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  fetchAPI();
  return countries;
};
