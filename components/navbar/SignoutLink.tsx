'use client';
import { useToast } from '@/hooks/use-toast';
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
const SignoutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'Logout successful.' });
  };
  return (
    <SignOutButton>
      <Link href={'/'} className=' w-full text-left' onClick={handleLogout}>
        logout
      </Link>
    </SignOutButton>
  );
};

export default SignoutLink;
