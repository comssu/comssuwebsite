import React, { useRef } from 'react';
import QRCode from "react-qr-code";
import { useNavigate, useParams } from "react-router-dom"
import { useGetStudentQuery } from '../app/api/students';
import { skipToken } from '@reduxjs/toolkit/query';
import { ArrowLeft, Github, Globe, Linkedin, Loader } from 'lucide-react';
import * as htmlToImage from "html-to-image";

const StudentProfile: React.FC = () => {

  const params = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetStudentQuery(params.id ?? skipToken);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const shareProfile = async () => {
    if (!profileRef.current) return;

    await Promise.all(
      Array.from(profileRef.current.querySelectorAll("img")).map(
        img =>
          img.complete
            ? Promise.resolve()
            : new Promise(res => (img.onload = img.onerror = res))
      )
    );

    const blob = await htmlToImage.toBlob(profileRef.current, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: "#ffffff",
    });

    if (!blob) return;

    const file = new File([blob], `comssuprofile(${data?.firstname}).png`, {
      type: "image/png",
    });

    if (navigator.share && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: `${data?.firstname}'s ComSSU Profile`,
        text: "Checkout my ComSSU profile😎✨",
        files: [file],
        url: `https://csunimak.netlify.app/student/${data?.id}`,
      });
    } else {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "profile.png";
      a.click();
    }
  };


  const getLevel = (level: string): string => {
    if(level === "Year 1") return "First Year";
    if(level === "Year 2") return "Second Year";
    if(level === "Year 3") return "Qualifying Year";
    if(level === "Year 4") return "Final Year";
    return level; }

  if(isLoading) return (
    <main ref={profileRef} className='fixed top-0 bottom-0 left-0 right-0 bg-linear-to-br from-sky-600 to-blue-900 flex flex-col gap-2 justify-center items-center canvas'><div className="w-full flex justify-center items-center">
      <ArrowLeft onClick={() => navigate(-1)} className='fixed top-5 left-5 text-white' />
      <Loader className="animate-spin text-white" size={25} /></div></main>
  )

  return (<>
    <main ref={profileRef} className='w-100 aspect-3/4 bg-linear-to-br from-sky-600 to-blue-900 via-amber-600 via-20% flex flex-col gap-2 justify-center items-center canvas shadow-sm'>
      <div className='flex-1 flex flex-col items-center gap-3 justify-center pt-4 px-5'>
        <div className='flex flex-col items-center'>
          <p className='text-gray-100'>ComSSU Profile</p>
          <h2 className='font-extrabold text-white  text-2xl md:text-3xl'>{data?.firstname} {data?.lastname}</h2>
          <p className='text-gray-300'>{getLevel(data?.level ?? "")}</p>
        </div>
        <div className='relative'>
          <img src={data?.profileUrl} className='w-50 aspect-square object-cover object-top border-6 border-white rounded-full' crossOrigin='anonymous' /> 
          <img src={"/images/[000213].png"} className='w-15 absolute bottom-0 right-0 bg-white aspect-square object-contain rounded-full p-1' crossOrigin='anonymous' />         
        </div>

      </div>
      <div className='flex-1 p-8 bg-white w-full rounded-t-[100px] flex flex-col items-center justify-between gap-3 text-gray-600'>
        <div className='flex w-full justify-center items-center'>
          <div className='w-30'>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={`https://csunimak.netlify.app/student/${data?.id}`}
              viewBox={`0 0 256 256`}
            />            
          </div>

        </div>
        <p className='text-sm text-center'>https://csunimak.netlify.app/student/{data?.id}</p>
      </div>
    </main>
    <main className='fixed top-0 bottom-0 left-0 right-0 bg-linear-to-br from-sky-600 to-blue-900 flex flex-col gap-2 md:gap-5 justify-center items-center canvas'>
      <ArrowLeft onClick={() => navigate(-1)} className='fixed top-5 left-5 active:opacity-90 hover:opacity-95 cursor-pointer text-white' />
      <div className='flex-1 flex flex-col items-center gap-3 justify-center pt-4 px-5 shrink'>
        <div className='flex flex-col items-center'>
          <h2 className='font-extrabold text-white text-2xl md:text-3xl'>{data?.firstname} {data?.lastname}</h2>
          <p className='text-gray-200'>{getLevel(data?.level ?? "")}</p>
        </div>
        <img src={data?.profileUrl} className='w-60 aspect-square object-cover object-top main-image border-12 border-white rounded-full shadow-sm' />
      </div>
      <div className='flex-1 py-3 px-6 bg-white w-full max-w-125 hide-scrollbar rounded-t-[100px] flex flex-col items-center justify-around gap-3 text-gray-600'>
        <img src={"/images/[000213].png"} className='w-25' />
        <p className='text-sm text-center'>{data?.about}</p>
        {(data?.website || data?.linkedIn || data?.github) && <div className='flex gap-2'>
          {data?.website && <a href={data?.website}><Globe size={30} className='cursor-pointer text-gray-500 hover:text-gray-600 active:text-gray-600 transition-all' /></a>}
          {data?.linkedIn && <a href={data?.linkedIn}><Linkedin size={30} className='cursor-pointer text-gray-500 hover:text-gray-600 active:text-gray-600 transition-all' /></a>}
          {data?.github && <a href={data?.github}><Github size={30} className='cursor-pointer text-gray-500 hover:text-gray-600 active:text-gray-600 transition-all' /></a>}
        </div>}
        <button onClick={shareProfile} className='w-full py-2 bg-blue-900 text-white rounded-full cursor-pointer hover:opacity-95 active:opacity-90'>Share Profile</button>
      </div>
    </main>
    </>
  )
}

export default StudentProfile;