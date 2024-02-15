import React from 'react';

export interface AvatarDumbProps {
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLUListElement>;
  isShowMenuOptionButton: boolean;
  isShowMessage: boolean;
  showMenuOptionButton: () => void;
  handleHideMenuOptionButton: () => void;
  openMenu: () => void;
  isHeaderAvatar: boolean;
}
