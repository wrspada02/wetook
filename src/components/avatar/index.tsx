import AvatarLib from '@mui/material/Avatar';
import { AvatarDumb } from './AvatarDumb';
import { useState } from 'react';

export function Avatar() {
 const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
 return (
  <figure className='flex gap-x-2'>
   <AvatarLib className='after:absolute !overflow-visible after:bottom-0 after:right-1 relative after:content-normal after:w-2 after:h-2 after:[clip-path:circle()] after:bg-green-400'>WS</AvatarLib>
   <figcaption>
    <AvatarDumb handleMenu={{ isMenuOpen, setIsMenuOpen }} />
   </figcaption>
  </figure>
 );
}