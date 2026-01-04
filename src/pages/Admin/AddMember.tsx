import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Plus, Link as LinkIcon, ArrowLeft } from "lucide-react";
import type { Member } from "../../types/member";

type Props = {
  members: Member[];
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
};

const AddMember = ({ members, setMembers }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const isEdit = Boolean(id);
  const existingMember = members.find((m) => m.id === id);

  const [form, setForm] = useState<Omit<Member, "image">>({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    level: "",
    profileUrl: "",
    website: "",
    github: "",
    linkedIn: "",
    about: "",
  });

  useEffect(() => {
    if (isEdit && existingMember) {
      setForm({
        id: existingMember.id,
        firstname: existingMember.firstname,
        lastname: existingMember.lastname,
        email: existingMember.email,
        level: existingMember.level,
        profileUrl: existingMember.profileUrl || "",
        website: existingMember.website || "",
        github: existingMember.github || "",
        linkedIn: existingMember.linkedIn || "",
        about: existingMember.about || "",
      });
    }
  }, [isEdit, existingMember]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields: (keyof typeof form)[] = [
      "id",
      "firstname",
      "lastname",
      "email",
      "level",
    ];

    if (requiredFields.some((f) => !form[f])) {
      alert("Please fill all required fields");
      return;
    }

    if (isEdit) {
      setMembers(
        members.map((m) =>
          m.id === id
            ? {
              ...m,
              ...form,
              image: form.profileUrl || m.image,
            }
            : m
        )
      );
      alert("Student updated successfully!");
    } else {
      setMembers([
        ...members,
        {
          ...form,
          image: form.profileUrl || "/images/abm.jpg",
        },
      ]);
      alert("Student added successfully!");
    }

    navigate("/admin/dashboard");
  };

  return (
    <>
      <NavBar />
      <div className="pt-24 px-4 bg-blue-50 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">

            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Plus className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {isEdit ? "Edit Student Information" : "Add Student Information"}
                </h2>
                <p className="text-sm text-gray-500">
                  {isEdit ? "Update the details below" : "Fill in the details below"}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "id", label: "Student ID" },
                  { name: "level", label: "Level" },
                  { name: "firstname", label: "First Name" },
                  { name: "lastname", label: "Last Name" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {f.label} *
                    </label>
                    <input
                      name={f.name}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <LinkIcon className="w-5 h-5 text-gray-400" />
                  <h3 className="font-medium text-gray-700">
                    Social Links (Optional)
                  </h3>
                </div>
                <div className="space-y-3">
                  {["profileUrl", "website", "linkedIn", "github"].map(
                    (name) => (
                      <input
                        key={name}
                        name={name}
                        value={form[name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={name}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      />
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  name="about"
                  value={form.about}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-600 transition"
              >
                {isEdit ? "Update Student" : "Add Student"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMember;
