import type { Member } from "../../types/member";
import api from "../apiSlice";

export const studentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query<{ hasMore: boolean, page: number, students: Member[] }, { page: number }>({
      query: ({ page }) => `/students?page=${page}`,
      serializeQueryArgs: ({endpointName}) => endpointName,
      merge: (cachedData, newData, { arg }) => {
        if(arg.page === 1) return newData;
        cachedData.students.push(...newData.students);
        cachedData.hasMore = newData.hasMore;
      },
      forceRefetch: ({currentArg, previousArg}) => previousArg?.page !== currentArg?.page,
      providesTags: (result) => result ? [
        ...result.students.map(student => ({type: "Member" as const, id: student.id})), {type: "Member" as const, id: "LIST"}
      ] : [{type: "Member" as const, id: "LIST"}]
    }),

    getStudent: builder.query<Member, string>({
      query: (id) => `/students/${id}`,
      providesTags: (result) => result ? [{type: "Member" as const, id: result.id}] : [{type: "Member" as const, id: "LIST"}]
    }),

    getAllStudents: builder.query<Member[], void>({
      query: () => `/students/all`,
      providesTags: (result) => result ? [
        ...result.map(student => ({type: "Member" as const, id: student.id})), {type: "Member" as const, id: "LIST"}
      ] : [{type: "Member" as const, id: "LIST"}]
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
      invalidatesTags: (result) => result ? [{type: "Member" as const, id: result.id}] : [{type: "Member" as const, id: "LIST"}]
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
  useGetStudentQuery,
  useDeleteStudentMutation,
  useAddStudentMutation,
  useUpdateStudentMutation,
  useGetAllStudentsQuery
} = studentsApi;
