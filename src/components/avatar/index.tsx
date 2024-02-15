import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';
import { AvatarProps } from './interfaces/AvatarProps';
import { AvatarContext } from './context/avatar';
import { Content } from './components/Content';

export function Avatar(props: AvatarProps) {
  const menuRef = useRef<HTMLUListElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShowMenuOptionButton, setIsShowMenuOptionButton] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const showMenuOptionButton = () => {
    setIsShowMenuOptionButton(true);
  };

  const closeMenu = useCallback((e: Event) => {
    if (menuRef.current && !menuRef.current?.contains(e.target as Node)) {
      setIsMenuOpen(false);
      setIsShowMenuOptionButton(false);
    }
  }, [menuRef]);

  const handleHideMenuOptionButton = useCallback(() => {
    if (menuRef.current) return;

    setIsShowMenuOptionButton(false);
  }, [menuRef]);

  const avatarContextValue = useMemo(() => ({
    ...props,
    isMenuOpen,
    openMenu,
    menuRef,
    isShowMenuOptionButton,
    isShowMessage: true,
    handleHideMenuOptionButton,
    showMenuOptionButton,
  }), [isMenuOpen, props, isShowMenuOptionButton, handleHideMenuOptionButton]);

  useEffect(() => {
    document.addEventListener('click', closeMenu, true);

    return () => {
      document.removeEventListener('click', closeMenu, true);
    };
  }, [closeMenu]);

  return (
    <AvatarContext.Provider value={avatarContextValue}>
      {props.linkUrl ? (
        <Link to={props.linkUrl}>
          <Content />
        </Link>
      ) : (
        <Content />
      )}
    </AvatarContext.Provider>
  );
}
