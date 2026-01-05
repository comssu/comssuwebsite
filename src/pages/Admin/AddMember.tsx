import { useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Plus, Link as LinkIcon, ArrowLeft, UserPen, Loader } from "lucide-react";
import type { Member } from "../../types/member";
import { useAddStudentMutation, useUpdateStudentMutation,useGetStudentsQuery } from "../../app/api/students";
import Toast from "../../components/Toast";
import type { ToastProps } from "../../utils/types";


const AddMember = () => {

  const navigate = useNavigate();
  const { data } = useGetStudentsQuery();
  const [addStudent, { isLoading: addingStudent }] = useAddStudentMutation();
  const [updateStudent, { isLoading: updatingStudent }] = useUpdateStudentMutation();
  const { id } = useParams<{ id?: string }>();
  const isEdit = Boolean(id);
  const [newprofileUrl, setNewprofileUrl] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);
  const members = data?.students ?? [];
  const [toastProps, setToastProps] = useState<ToastProps>({ message: null, timeout: 0, isError: false });
  const existingMember = members.find((m) => m.id === id);
  const [form, setForm] = useState<Member>(() => {
    if (isEdit && existingMember) {
      return {
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
      };
    }
    return {
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
    }});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if(!files?.[0]) return;
    setNewprofileUrl(URL.createObjectURL(files?.[0]));
    setPhoto(files?.[0]); }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields: (keyof typeof form)[] = [
      "id",
      "firstname",
      "lastname",
      "email",
      "level",
      "about"
    ];

    if (requiredFields.some((f) => !form[f])) {
      setToastProps({message: "Please fill all required fields!", timeout: 5000, isError: true});
      return; }

    if (isEdit) {
      const body: FormData = new FormData();
      body.append("id", form.id);
      body.append("firstname", form.firstname);
      body.append("lastname", form.lastname);
      body.append("email", form.email);
      body.append("about", form.about);
      body.append("level", form.level);
      body.append("github", form.github ?? "");
      body.append("linkedIn", form.linkedIn ?? "");
      body.append("website", form.website ?? "");
      body.append("photo", photo ?? "");
      try{
        const res = await updateStudent(body).unwrap();
        if(res.id) navigate("/admin");
      } catch(err){
        console.log(err)
        if(err && typeof err === "object" && "data" in err){
          const e = err as { data: { message: string } };
          setToastProps({ message: e.data.message, timeout: 5000, isError: true });
        }        
      }
    } else {
      if (!photo) {
        setToastProps({message: "Profile photo is required!", timeout: 5000, isError: true});
        return; }
      const body: FormData = new FormData();
      body.append("id", form.id);
      body.append("firstname", form.firstname);
      body.append("lastname", form.lastname);
      body.append("email", form.email);
      body.append("about", form.about);
      body.append("level", form.level);
      body.append("github", form.github ?? "");
      body.append("linkedIn", form.linkedIn ?? "");
      body.append("website", form.website ?? "");
      body.append("photo", photo ?? "");
      try{
        const res = await addStudent(body).unwrap();
        if(res.id) navigate("/admin");
      } catch(err){
        console.log(err)
        if(err && typeof err === "object" && "data" in err){
          const e = err as { data: { message: string } };
          setToastProps({ message: e.data.message, timeout: 5000, isError: true });
        }        
      }
    }
  };

  return (
    <>
      <NavBar />
      <Toast toastProps={toastProps} setToastProps={setToastProps}/>
      <div className="pt-20 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">

            <button
              onClick={() => navigate(-1)}
              className="flex cursor-pointer items-center gap-2 mb-3 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="flex items-center gap-3 mb-3">
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

            <form onSubmit={handleSubmit} className="space-y-3 flex flex-col">
              <div className='mb-2 relative'>
                {(existingMember?.profileUrl && !newprofileUrl) && <img src={existingMember.profileUrl} className='w-25 aspect-square rounded-full border object-cover object-top border-gray-200' />}
                {(!existingMember?.profileUrl && !newprofileUrl) && <img src={"https://avatar.iran.liara.run/public"} className='w-25 aspect-square rounded-full border object-cover object-top border-gray-200' />}
                {newprofileUrl && <img src={newprofileUrl ? newprofileUrl : "https://avatar.iran.liara.run/public"} className='w-25 aspect-square rounded-full border object-cover object-top border-gray-200' />}
                <label htmlFor='profile' className='w-7 aspect-square rounded-full bg-white cursor-pointer absolute border border-gray-200 right-1.5 bottom-1.5 flex justify-center items-center'><UserPen size={15} className='text-pri' /></label>
                <input type='file' className='hidden' name="profile" id="profile" onChange={(e) => handleProfileChange(e)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { name: "id", label: "Student ID" },
                  { name: "firstname", label: "First Name" },
                  { name: "lastname", label: "Last Name" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-gray-700">
                      {f.label}<span className="text-red-600">*</span>
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
                <label className="block text-sm font-medium text-gray-700">
                  Email<span className="text-red-600">*</span>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level<span className="text-red-600">*</span>
                </label>
                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value={""} disabled>Select Level</option>
                  <option value={"Year 1"}>Year 1</option>
                  <option value={"Year 2"}>Year 2</option>
                  <option value={"Year 3"}>Year 3</option>
                  <option value={"Year 4"}>Year 4</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio<span className="text-red-600">*</span>
                </label>
                <textarea
                  name="about"
                  value={form.about}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
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
                  {[ "website", "linkedIn", "github"].map(
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

              <button
                type="submit"
                className="w-full bg-linear-to-r from-sky-400 to-blue-400 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-600 transition flex justify-center items-center cursor-pointer"
              >
                {(addingStudent || updatingStudent) ? <Loader size={17} className="animate-spin" /> : isEdit ? "Update Student" : "Add Student"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMember;
