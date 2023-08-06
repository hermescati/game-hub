import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be9f36a8ee854e3d84f44c5b9ebd7fd6",
  },
});
