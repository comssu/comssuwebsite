import React, { useState } from 'react'; 
import type { Member } from '../types/member';
import { Loader, MoreVertical, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteStudentMutation } from '../app/api/students';
import { useAppSelector } from '../app/hooks';

const StudentExcerpt: React.FC<{ student: Member }> = ({ student }) => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [deleteStudent, { isLoading: deleting }] = useDeleteStudentMutation();
  const { token } = useAppSelector(state => state.auth)

  const handleDelete = async() => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      const response = await deleteStudent(student.id).unwrap();
      if(response.message) navigate("/admin")
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(prev => !prev)
  };

  return (
    <div
      key={student?.id}
      onClick={() => navigate(`/student/${student?.id}`)}
      className="bg-white p-5 flex flex-col items-center justify-center rounded-xl shadow-sm relative overflow-hidden gap-2 border border-gray-200 cursor-pointer group"
    >
      {token && <button
        onClick={() => handleMenuToggle()}
        className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
      >
        {showMenu ? <X size={17} /> : <MoreVertical size={20} />}
      </button>}

      {showMenu && (
        <div className="absolute top-10 right-3 bg-white border border-gray-300 rounded-md shadow-md w-28 z-10">
          <Link
            to={`/admin/edit-member/${student?.id}`}
            className="block w-full px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
          >
            Edit
          </Link>

          <button
            className="block w-full px-4 py-2 text-sm rounded-lg cursor-pointer text-red-500 hover:bg-gray-100 text-left"
            onClick={() => handleDelete()}
          >
            {deleting ? <Loader size={17} className="animate-spin" /> : "Delete"}
          </button>
        </div>
      )}

      <div className="flex flex-col items-center gap-3">
        <img
          src={student?.profileUrl}
          alt={`${student?.firstname} ${student?.lastname}`}
          className="w-23 h-23 object-top rounded-full object-cover group-hover:scale-110 group-active:scale-0 transition-transform"
        />
        <div className="text-center">
          <h3 className="font-bold text-sm">{student?.firstname} {student?.lastname}</h3>
          <p className="text-[0.7rem] w-full text-gray-500">{student?.email.length > 20 ? student?.email.slice(0, 20) : student?.email}{student?.email.length > 20 && "..."}</p>
          <p className="text-xs text-gray-400">{student?.level}</p>
        </div>
      </div>
    </div>
  )
}

export default StudentExcerpt