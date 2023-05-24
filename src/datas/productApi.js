import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { post } from "../../../Ray-store-backend/routes"


// making an api call using fetchBaseQuery to get products from db
export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://hi-gadget.onrender.com" }),
    endpoints: (builder)=>({
        getAllProducts: builder.query({
            query:()=> "products"
        }),
        getAllCustomers: builder.query({
            query:()=> "customers"
        }),
        getAllOrders: builder.query({
            query: ()=> "orders"
        }),
 
       
    })
})



export const { useGetAllProductsQuery, useGetAllCustomersQuery, useGetAllOrdersQuery } = productsApi

