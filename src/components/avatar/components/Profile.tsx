import AvatarLib from '@mui/material/Avatar';
import { useContext } from 'react';
import { AvatarContext } from '../context/avatar';

export function Profile() {
  const avatar = useContext(AvatarContext);

  return (
    <AvatarLib className={`${avatar?.isColumnStyle && 'min-w-20 min-h-20 mx-auto after:w-5 after:h-5'} ${avatar?.isHeaderAvatar || avatar?.isColumnStyle ? 'after:animate-none' : 'after:animate-ripple'} after:absolute !overflow-visible after:bottom-0 after:right-1 relative after:content-normal after:w-2 after:h-2 after:[clip-path:circle()] after:bg-green`} alt='Profile user picture'>WS</AvatarLib>
  );
}