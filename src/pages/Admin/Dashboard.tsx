import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { MoreVertical } from 'lucide-react';
import type { Member } from '../../types/member';
import { Link } from 'react-router-dom';

type Props = {
  members: Member[];
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
};

const Dashboard: React.FC<Props> = ({ members, setMembers }) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  const handleMenuToggle = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 pt-24 px-6 bg-blue-50">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <Link
            to="/admin/add-member"
            className="bg-blue-400 text-white px-5 py-2 rounded hover:bg-blue-500 transition"
          >
            Add Student
          </Link>
        </div>

        {members.length === 0 ? (
          <p className="text-gray-500">No students found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((student) => (
              <div key={student.id} className="bg-white p-5 rounded-xl shadow relative">
                <button
                  onClick={() => handleMenuToggle(student.id)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                  <MoreVertical size={20} />
                </button>

                {openMenuId === student.id && (
                  <div className="absolute top-10 right-3 bg-white border rounded-md shadow-md w-28 z-10">
                    <button
                      className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
                      onClick={() => alert("Edit not implemented yet")}
                    >
                      Edit
                    </button>
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
                    <p className="text-xs">{student.about}</p>
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
