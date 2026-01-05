import type { Member } from "../../types/member";
import api from "../apiSlice";

export const studentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query<{ nextCursor: string, students: Member[] }, void>({
      query: () => "/students",
      providesTags: [{type: "Member" as const, id: "LIST"}]
    }),

    addStudent: builder.mutation<Member, FormData>({
      query: (body) => ({
        url: "/students",
        method: "POST",
        body
      }),
      invalidatesTags: [{type: "Member" as const, id: "LIST"}]
    }),

    updateStudent: builder.mutation<Member, FormData>({
      query: (body) => ({
        url: `/students/${body.get("id")}`,
        method: "PATCH",
        body
      }),
      invalidatesTags: [{type: "Member" as const, id: "LIST"}]
    }),

    deleteStudent: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: [{type: "Member" as const, id: "LIST"}]
    })
  }),
});

export const {
  useGetStudentsQuery,
  useDeleteStudentMutation,
  useAddStudentMutation,
  useUpdateStudentMutation,
} = studentsApi;
