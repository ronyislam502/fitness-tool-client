import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  tagTypes: ["Product"],
  endpoints: () => ({}),
});

export default baseApi;
