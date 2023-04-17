import { apiSlice } from "../../app/api/apiSlice";




// inject api slice


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : builder => ({
        getUsers : builder.query({
            query : () => '/api/v1/user',
            providesTags : (result, err, args) => {
                return [{type :'User', id : "LIST"}]
            },
            keepUnusedDataFor : 60,
            validateStatus : (response, result) =>({})
        }),
        getUserById : builder.query({
            query : (id) => `/api/v1/user/${id}`,
            providesTags : () => {},
            keepUnusedDataFor : 60,
            validateStatus : (response, result) =>({})
        })
    })
})