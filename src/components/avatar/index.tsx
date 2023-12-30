import AvatarLib from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { AvatarDumb } from './AvatarDumb';
import { useState } from 'react';
import { AvatarProps } from './interfaces/AvatarProps';

export function Avatar(props: AvatarProps) {
 const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
 return (
  <figure className='flex gap-x-2'>
   {props.isGroup ? (
    <Badge
     overlap="circular"
     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
     badgeContent={
      <AvatarLib alt="Remy Sharp" className='!w-5 !h-5 !text-xs'>CS</AvatarLib>
     }
    >
     <AvatarLib alt="Travis Howard">PS</AvatarLib>
    </Badge>
   ) : (
    <AvatarLib className='after:absolute after:animate-bounce !overflow-visible after:bottom-0 after:right-1 relative after:content-normal after:w-2 after:h-2 after:[clip-path:circle()] after:bg-green-400'>WS</AvatarLib>
   )}
   <figcaption>
    <AvatarDumb handleMenu={{ isMenuOpen, setIsMenuOpen }} />
   </figcaption>
  </figure>
 );
}