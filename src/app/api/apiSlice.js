import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// create api

export const apiSlice = createApi({
    reducerPath : 'api',
    tagTypes : ["User" ],
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:5050',
        
    }),
    endpoints : builder => ({

    }) 
    
})