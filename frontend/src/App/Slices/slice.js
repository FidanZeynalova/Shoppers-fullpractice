import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopperApi = createApi({
  reducerPath: 'shopperApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => `shop/`,
    }),
    getDataById: builder.query({
      query: (id) => `shop/${id}`,
    }),
    deleteData: builder.mutation({
      query: (id) => ({
        url: `shop/${id}`,
        method: "DELETE"
      })
    }),
    postData: builder.mutation({
      query: (newData) => ({
        url: `shop`,
        method: "POST",
        body: newData,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
    }),
  }),
})
export const { useGetDataQuery, useGetDataByIdQuery, useDeleteDataMutation, usePostDataMutation } = shopperApi