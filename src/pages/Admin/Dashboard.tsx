import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Loader, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetStudentsQuery } from "../../app/api/students";
import StudentExcerpt from "../../components/StudentExcerpt";
import clsx from "clsx";

const Dashboard: React.FC = () => {

  const { data, isLoading } = useGetStudentsQuery();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const members = data?.students ?? [];

  const filteredMembers = members.filter((student) =>
    `${student.firstname} ${student.lastname} ${student.email}`
      .toLowerCase()
      .includes(search.toLowerCase()) && student?.level.includes(filter)
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

            <Link
              to="/admin/add-member"
              className="bg-blue-400 text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition text-sm w-30 flex items-center justify-center"
            >
              Add Student
            </Link>
          </div>
        </div>

        <div className="flex w-full gap-1 mb-2 max-w-5xl mx-auto">
          <button onClick={() => setFilter("")} className={clsx('text-[0.8rem] border flex-1 px-2 py-1 rounded-full transition-colors cursor-pointer shadow-2xs', filter === "" ? "bg-blue-100 border-blue-500 text-blue-500" : "border-gray-400 text-gray-400")}>All</button>
          <button onClick={() => setFilter("Year 1")} className={clsx('text-[0.8rem] border flex-1 px-2 py-1 rounded-full transition-colors cursor-pointer shadow-2xs', filter === "Year 1" ? "bg-blue-100 border-blue-500 text-blue-500" : "border-gray-400 text-gray-400")}>Year 1</button>
          <button onClick={() => setFilter("Year 2")} className={clsx('text-[0.8rem] border flex-1 px-2 py-1 rounded-full transition-colors cursor-pointer shadow-2xs', filter === "Year 2" ? "bg-blue-100 border-blue-500 text-blue-500" : "border-gray-400 text-gray-400")}>Year 2</button>
          <button onClick={() => setFilter("Year 3")} className={clsx('text-[0.8rem] border flex-1 px-2 py-1 rounded-full transition-colors cursor-pointer shadow-2xs', filter === "Year 3" ? "bg-blue-100 border-blue-500 text-blue-500" : "border-gray-400 text-gray-400")}>Year 3</button>
          <button onClick={() => setFilter("Year 4")} className={clsx('text-[0.8rem] border flex-1 px-2 py-1 rounded-full transition-colors cursor-pointer shadow-2xs', filter === "Year 4" ? "bg-blue-100 border-blue-500 text-blue-500" : "border-gray-400 text-gray-400")}>Year 4</button>
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

export default Dashboard;
