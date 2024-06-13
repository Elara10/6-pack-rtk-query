import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi=createApi({
    reducerPath:"myApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/",
    }),
    tagTypes:["Posts"],
    endpoints:(builder)=>({

        getPosts:builder.query<Post[], string>({ query: () => "posts",
    providesTags:["Posts"]}),

        newPosts:builder.mutation<Post,Post>({
            query:(post)=>({
                url:"posts",
                method:"POST",
                body:post
            })
        })
    }),
});
export const { useGetPostsQuery,useNewPostsMutation }=myApi