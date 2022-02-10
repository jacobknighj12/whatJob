import axios from "axios";

const WhatJobRailsAPI = axios.create({
  baseURL: "http://localhost:3000",
});

export default WhatJobRailsAPI;
