import axios from "axios";

export const API = axios.create({
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY,
    "x-rapidapi-host": "burgers-hub.p.rapidapi.com",
  },
});
export const URI = "https://burgers-hub.p.rapidapi.com/burgers";
