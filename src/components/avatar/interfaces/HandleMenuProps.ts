export interface HandleMenuProps {
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLUListElement>;
  isShowMenuOptionButton: boolean;
  isShowMessage: boolean;
  showMenuOptionButton: () => void;
  hideMenuOptionButton: () => void;
  openMenu: () => void;
}