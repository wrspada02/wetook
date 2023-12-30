export interface AvatarDumbProps {
 handleMenu: {
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLUListElement>;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  openMenu: () => void;
 }
}