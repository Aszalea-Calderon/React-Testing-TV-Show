import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      console.log("data", res);
      return res;
    })
    .catch((err) => {
      console.error("Error fetching data from the api, error: ", err.message);
      return err;
    });
};
