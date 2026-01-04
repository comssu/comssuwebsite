import type { SigninFormData } from "../../utils/types";
import api from "../apiSlice";


const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<{id: string, email: string}, SigninFormData>({
            query: (body) => ({
                url: "/auth",
                method: "POST",
                body
            }),
        }),
        signOut: builder.mutation<{ message: string }, null>({
            query: () => ({
                url: "/auth/signout",
                method: "POST",
                body: {}
            }),
        }),
    }),
});


export const { useSignInMutation, useSignOutMutation } = authApi;