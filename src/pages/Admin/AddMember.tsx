import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { Plus, Link as LinkIcon } from 'lucide-react';
import type { Member } from '../../types/member';

type Props = {
  members: Member[];
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
};

const AddMember = ({ members, setMembers }: Props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState<Omit<Member, "image">>({
    id: "",firstname: "", lastname: "", email: "", level: "", profileUrl: "", website: "", github: "", linkedIn: "", about: "",});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields: (keyof typeof form)[] = [
      "id", "firstname", "lastname", "email", "level"];

    if (requiredFields.some((f) => !form[f])) {
      alert("Please fill required fields (ID, First Name, Last Name, Email, Level)");
      return;
    }

    setMembers([...members, { ...form, image: form.profileUrl || "/images/abm.jpg" }]);
    alert("Student added successfully!");
    navigate("/admin/dashboard");
  };

  const fields = [
    { name: "id", label: "Student ID", type: "text", required: true },
    { name: "level", label: "Level", type: "text", required: true },
    { name: "firstname", label: "First Name", type: "text", required: true },
    { name: "lastname", label: "Last Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "profileUrl", label: "Profile Image URL", type: "text", required: false },
    { name: "website", label: "Website URL", type: "text", required: false },
    { name: "linkedIn", label: "LinkedIn URL", type: "text", required: false },
    { name: "github", label: "GitHub URL", type: "text", required: false },
  ];

  return (
    <>
      <NavBar />
      <div className="pt-24 px-4 bg-blue-50 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Plus className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Add Student Information</h2>
                <p className="text-sm text-gray-500">Fill in the details below</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.slice(0, 5).map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {f.label} {f.required && "*"}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required={f.required}
                    />
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <LinkIcon className="w-5 h-5 text-gray-400" />
                  <h3 className="font-medium text-gray-700">Social Links (Optional)</h3>
                </div>
                <div className="space-y-3">
                  {fields.slice(5).map((f) => (
                    <input
                      key={f.name}
                      type={f.type}
                      name={f.name}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={f.label}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  name="about"
                  value={form.about}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about the student..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Add Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMember;
