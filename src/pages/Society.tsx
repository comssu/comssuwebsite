import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Loader, Search } from "lucide-react";
import { useGetStudentsQuery } from "../app/api/students";
import StudentExcerpt from "../components/StudentExcerpt";

const Society: React.FC = () => {

  const { data, isLoading } = useGetStudentsQuery();
  const [search, setSearch] = useState("");

  const members = data?.students ?? [];

  const filteredMembers = members.filter((student) =>
    `${student.firstname} ${student.lastname} ${student.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 pt-20 px-6 bg-gray-50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
          {/* <h2 className="text-lg font-semibold">Admin Dashboard</h2> */}
          <div className="flex gap-2 items-stretch w-full max-w-5xl mx-auto">
            <div className="relative flex-3">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none w-full text-sm"
              />
            </div>

            {/* <Link
              to="/admin/add-member"
              className="bg-blue-400 text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition text-sm w-30 flex items-center justify-center"
            >
              Add Student
            </Link> */}
          </div>
        </div>

        {isLoading ? <div className="w-full flex justify-center items-center"><Loader className="animate-spin" size={17} /></div> : filteredMembers.length === 0 ? (
          <p className="text-gray-500 text-center text-sm">No student found!</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 pb-20 md:pb-0 max-w-5xl mx-auto">
            {filteredMembers.map((student) => (
              <StudentExcerpt key={student.id} student={student} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Society;
