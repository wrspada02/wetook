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
  <article className={`${props.isColumnStyle && 'flex-col'} flex gap-x-2 w-full`}>
   {props.isGroup ? (
    <Badge
     overlap="circular"
     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
     badgeContent={
      <AvatarLib alt="Group profile picture" className='!w-5 !h-5 !text-xs'>CS</AvatarLib>
     }
    >
     <AvatarLib alt="Profile user picture">PS</AvatarLib>
    </Badge>
   ) : (
    <AvatarLib className={`${props.isColumnStyle && 'min-w-20 min-h-20 mx-auto after:w-5 after:h-5'} ${!!props.isHeaderAvatar || !!props.isColumnStyle ? 'after:animate-none' : 'after:animate-ripple'} after:absolute !overflow-visible after:bottom-0 after:right-1 relative after:content-normal after:w-2 after:h-2 after:[clip-path:circle()] after:bg-green`} alt='Profile user picture'>WS</AvatarLib>
   )}
   <p className={`${props.isColumnStyle && 'text-center pt-3 gap-y-5'} flex-1`}>
    <AvatarDumb isHeaderAvatar={props.isHeaderAvatar} handleMenu={{ isMenuOpen, openMenu, menuRef, isShowMenuOptionButton, isShowMessage: true, hideMenuOptionButton: handleHideMenuOptionButton, showMenuOptionButton }} />
   </p>
  </article>
 );
}