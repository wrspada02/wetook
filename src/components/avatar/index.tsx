import AvatarLib from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { AvatarDumb } from './AvatarDumb';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AvatarProps } from './interfaces/AvatarProps';

export function Avatar(props: AvatarProps) {
 const menuRef = useRef<HTMLUListElement | null>(null);

 const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
 const [isShowMenuOptionButton, setIsShowMenuOptionButton] = useState<boolean>(false);

 const openMenu = () => {
  setIsMenuOpen(true);
 };

 const closeMenu = useCallback((e: Event) => {
  if (menuRef.current && !menuRef.current?.contains(e.target as Node)) {
   setIsMenuOpen(false);
   setIsShowMenuOptionButton(false);
  }
 }, [menuRef]);

 const showMenuOptionButton = () => {
  setIsShowMenuOptionButton(true);
 };

 const handleHideMenuOptionButton = useCallback(() => {
  if (menuRef.current) return;

  setIsShowMenuOptionButton(false);
 }, [menuRef]);

 useEffect(() => {
  document.addEventListener('click', closeMenu, true);

  return () => {
   document.removeEventListener('click', closeMenu, true);
  }
 }, [closeMenu]);

 return (
  <figure className='flex gap-x-2 w-full'>
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
    <AvatarLib className='after:absolute after:animate-ripple !overflow-visible after:bottom-0 after:right-1 relative after:content-normal after:w-2 after:h-2 after:[clip-path:circle()] after:bg-green'>WS</AvatarLib>
   )}
   <figcaption className='flex-1'>
    <AvatarDumb handleMenu={{ isMenuOpen, openMenu, menuRef, isShowMenuOptionButton, isShowMessage: true, hideMenuOptionButton: handleHideMenuOptionButton, showMenuOptionButton }} />
   </figcaption>
  </figure>
 );
}