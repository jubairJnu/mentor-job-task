import { baseApi } from "../../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get active batch
    getUserInfo: builder.query({
      query: (email) => ({
        url: `/user/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserInfoQuery } = usersApi;
