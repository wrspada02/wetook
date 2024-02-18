import React from 'react';

export interface AvatarDumbProps {
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLUListElement>;
  isHeaderAvatar: boolean;
  openMenu: () => void;
}
