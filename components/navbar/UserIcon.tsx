import { currentUser } from '@clerk/nextjs/server';
import React from 'react';
import { LuUser2 } from 'react-icons/lu';
const UserIcon = async () => {
  const user = await currentUser();
  const profileImg = user?.imageUrl;
  return (
    <div>
      {profileImg ? (
        <img
          src={profileImg}
          className=' w-6 h-6 rounded-full object-cover'
          alt=''
        />
      ) : (
        <LuUser2 className=' w-6 h-6 bg-primary text-white rounded-full' />
      )}
    </div>
  );
};

export default UserIcon;
