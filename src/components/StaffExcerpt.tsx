import React from 'react';

interface Props {
  staff: {
    image: string,
    name: string,
    position: string
  }
}

const StaffExcerpt: React.FC<Props> = ({ staff }) => {
  return (
    <div className='bg-sky-50 rounded-xl border-2 border-sky-400 p-3 text-sm shadow-2xs'>
        <img src={staff.image} alt={staff.image} className='mb-1 rounded-xl' />
        <h2 className='font-black'>{staff.name}</h2>
        <p>{staff.position}</p>
    </div>
  )
}

export default StaffExcerpt;