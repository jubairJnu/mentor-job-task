import { baseApi } from "../../../api/baseApi";

const homeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get active batch
    getAllHomeData: builder.query({
      query: () => ({
        url: "/home",
        method: "GET",
      }),
      providesTags: ["homedata"],
    }),
  }),
});

export const { useGetAllHomeDataQuery } = homeApi;
