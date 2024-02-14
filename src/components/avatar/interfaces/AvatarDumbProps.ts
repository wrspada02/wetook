export interface AvatarDumbProps {
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLUListElement>;
  isShowMenuOptionButton: boolean;
  isShowMessage: boolean;
  showMenuOptionButton: () => void;
  hideMenuOptionButton: () => void;
  openMenu: () => void;
  isHeaderAvatar: boolean;
}
