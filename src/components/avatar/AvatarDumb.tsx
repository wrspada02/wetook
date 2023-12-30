import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { AvatarDumbProps } from './interfaces/AvatarDumb';
import { useCallback, useEffect, useRef } from 'react';

export function AvatarDumb(props: AvatarDumbProps) {
 const menuRef = useRef<HTMLUListElement | null>(null);

 const openMenu = useCallback(() => {
  props.handleMenu.setIsMenuOpen(true);
 }, [props.handleMenu]);

 const closeMenu = useCallback((e: Event) => {
  if (menuRef.current && !menuRef.current?.contains(e.target as Node)) {
   props.handleMenu.setIsMenuOpen(false);
  }
 }, [props.handleMenu]);

 useEffect(() => {
  document.addEventListener('click', closeMenu, true);

  return () => {
   document.removeEventListener('click', closeMenu, true);
  }
 }, [closeMenu]);

 return (
  <section className="flex relative gap-x-3">
   <article>
    <h3 className='text-base'>Cody Fisher</h3>
    <p className='text-sm text-[#919191]'>Last connected 8 minutes ago</p>
   </article>
   <ul className='flex items-center gap-x-3'>
    <li className="[clip-path:circle()] w-5 h-5 bg-[#FF4A4A] flex items-center justify-center">
     <span className="text-center text-white text-xs">3</span>
    </li>
    <li className='cursor-pointer hover:opacity-50 hover:transition-all' onClick={openMenu}>
     <MoreVertIcon />
    </li>
   </ul>
   {props.handleMenu.isMenuOpen && (
    <MenuList className='bg-[#413e3e] text-white !absolute !left-full' ref={menuRef}>
     <MenuItem>
      <ListItemIcon>
       <CheckIcon fontSize="small" style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>Mark as Read</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemIcon>
       <NotificationsOffIcon fontSize="small" style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>Turn off Notifications</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemIcon>
       <PersonIcon fontSize="small" style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>Profile</ListItemText>
     </MenuItem>
     <Divider />
     <MenuItem>
      <ListItemIcon>
       <CallIcon fontSize="small" style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>Call</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemIcon>
       <VideocamIcon fontSize="small" style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>Video Call</ListItemText>
     </MenuItem>
     <Divider />
     <MenuItem>
      <ListItemIcon>
       <HelpOutlineIcon fontSize="small" style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>Block</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemIcon>
       <Inventory2OutlinedIcon fontSize="small" style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>Move to Box</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemIcon>
       <DeleteOutlineIcon fontSize="small" style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>Delete Conversation</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemIcon>
       <ReportProblemOutlinedIcon fontSize="small" style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>Report</ListItemText>
     </MenuItem>
    </MenuList>
   )}
  </section>
 );
}