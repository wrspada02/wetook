import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AvatarDumb } from './AvatarDumb';
import { AvatarProps } from './interfaces/AvatarProps';
import { Group } from './components/Group';
import { Profile } from './components/Profile';
import { AvatarContext } from './context/avatar';

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
    };
  }, [closeMenu]);

  function Avatar() {
    return (
      <article className={`${props.isColumnStyle && 'flex-col'} flex gap-x-2 w-full`}>
        {props.isGroup ? (
          <Group />
        ) : (
          <Profile />
        )}
        <Typography component="p" variant="body2" className={`${props.isColumnStyle && 'text-center pt-3 gap-y-5'} flex-1`}>
          <AvatarDumb />
        </Typography>
      </article>
    );
  }

  return (
    <AvatarContext.Provider value={{
      ...props, isMenuOpen, openMenu, menuRef, isShowMenuOptionButton, isShowMessage: true, hideMenuOptionButton: handleHideMenuOptionButton, showMenuOptionButton,
    }}
    >
      {props.linkUrl ? (
        <Link to={props.linkUrl}>
          <Avatar />
        </Link>
      ) : (
        <Avatar />
      )}
    </AvatarContext.Provider>
  );
}
