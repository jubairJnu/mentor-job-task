import { baseApi } from "../../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // sign up

    signUpUser: builder.mutation({
      query: (data) => ({
        url: "/user/sign-up",
        method: "POST",
        body: data,
      }),
      providesTags: ["userinfo", "homedata"],
    }),

    //get
    getUserInfo: builder.query({
      query: (email) => ({
        url: `/user/${email}`,
        method: "GET",
      }),
      providesTags: ["userinfo"],
    }),

    // purchase recipe

    purchaseRecipe: builder.mutation({
      query: (data) => ({
        url: "/user/purchase-recipe",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["userinfo", "recipies"],
    }),

    // purchase coin

    purchaseCoin: builder.mutation({
      query: (options) => ({
        url: `/user/purchase-coin/${options.email}`,
        method: "PATCH",
        body: { data: options.data },
      }),
      invalidatesTags: ["userinfo"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  usePurchaseRecipeMutation,
  useSignUpUserMutation,
  usePurchaseCoinMutation,
} = usersApi;
