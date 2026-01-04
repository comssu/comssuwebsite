import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { MoreVertical, Search } from "lucide-react";
import type { Member } from "../../types/member";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  members: Member[];
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
};

const Dashboard: React.FC<Props> = ({ members, setMembers }) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setMembers(members.filter((m) => m.id !== id));
    }
  };

  const handleMenuToggle = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const filteredMembers = members.filter((student) =>
    `${student.firstname} ${student.lastname} ${student.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 pt-24 px-6 bg-blue-50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <Link
              to="/admin/add-member"
              className="bg-blue-400 text-white px-5 py-2 rounded hover:bg-blue-500 transition"
            >
              Add Student
            </Link>
          </div>
        </div>

        {filteredMembers.length === 0 ? (
          <p className="text-gray-500">No students found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map((student) => (
              <div
                key={student.id}
                className="bg-white p-5 rounded-xl shadow relative"
              >
                <button
                  onClick={() => handleMenuToggle(student.id)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                  <MoreVertical size={20} />
                </button>

                {openMenuId === student.id && (
                  <div className="absolute top-10 right-3 bg-white border rounded-md shadow-md w-28 z-10">
                    <Link
                      to={`/admin/edit-member/${student.id}`}
                      className="block w-full px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Edit
                    </Link>

                    <button
                      className="block w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 text-left"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}

                <div className="flex flex-col items-center gap-3 mt-6">
                  <img
                    src={student.image}
                    alt={`${student.firstname} ${student.lastname}`}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold">{student.firstname} {student.lastname}</h3>
                    <p className="text-sm text-blue-500">{student.email}</p>
                    <p className="text-xs text-gray-500">Level: {student.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
