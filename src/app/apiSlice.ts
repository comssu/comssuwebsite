import { fetchBaseQuery, type BaseQueryFn } from "@reduxjs/toolkit/query";
import type { RootState } from "./store";
import { clearCredentials, setCredentials } from "./authSlice";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { SigninReturnType } from "../utils/types";


const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if(token) headers.set("authorization", `Bearer ${token}`);
        return headers; },
    credentials: "include",
});


const baseQueryWithReAuth: BaseQueryFn = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if(result.error?.status === 403){
        const refreshResult = await baseQuery("/refresh", api, extraOptions);
        if(refreshResult.data){
            const data = refreshResult.data as SigninReturnType;
            api.dispatch(setCredentials(data));
            result = await baseQuery(args, api, extraOptions);
        }else{
            await baseQuery("/signout", api, extraOptions);
            api.dispatch(clearCredentials());
        }
    }
    return result;
}


const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReAuth,
    tagTypes: ["Member"],
    endpoints: () => ({}),
});


export default api;