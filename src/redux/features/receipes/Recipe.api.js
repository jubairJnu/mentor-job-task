import { baseApi } from "../../../api/baseApi";

const recipesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get active batch

    //
    getAllRecipes: builder.query({
      query: (queryInfo) => ({
        url: `/recipe/?name=${queryInfo?.name}&category=${queryInfo?.category}&country=${queryInfo?.country}`,
        method: "GET",
        // body: queryInfo,
      }),

      providesTags: ["recipes"],
    }),

    // get singel

    getSingleRecipes: builder.query({
      query: (id) => ({
        url: `/recipe/${id}`,
        method: "GET",
      }),
    }),

    // check recipi

    getSameCategoryRecipe: builder.query({
      query: (category) => ({
        url: `/recipe/same/${category}`,
        method: "GET",
      }),
    }),

    // create

    creteRecipes: builder.mutation({
      query: (data) => ({
        url: "/recipe",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["recipies", "homedata"],
    }),
  }),
});

export const {
  useGetAllRecipesQuery,
  useCreteRecipesMutation,
  useGetSameCategoryRecipeQuery,
  useGetSingleRecipesQuery,
} = recipesApi;
