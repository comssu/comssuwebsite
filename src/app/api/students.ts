import api from "../apiSlice";

export const studentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query<any, void>({
      query: () => "/admin/students",
    }),

    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/admin/students/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useDeleteStudentMutation,
} = studentsApi;
