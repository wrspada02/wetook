import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { useContext } from 'react';
import { Typography } from '@mui/material';
import { AvatarContext } from '../context/avatar';

export function AvatarDumb() {
  const avatar = useContext(AvatarContext);

  const avatarListOptions = [
    {
      icon: <CheckIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Mark as Read',
    },
    {
      icon: (
        <NotificationsOffIcon fontSize="small" style={{ color: 'white' }} />
      ),
      text: 'Turn off Notifications',
    },
    {
      icon: <PersonIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Profile',
    },
    {
      icon: <CallIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Call',
    },
    {
      icon: <VideocamIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Video Call',
    },
    {
      icon: <HelpOutlineIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Block',
    },
    {
      icon: (
        <Inventory2OutlinedIcon fontSize="small" style={{ color: 'white' }} />
      ),
      text: 'Move to Box',
    },
    {
      icon: <DeleteOutlineIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Delete Conversation',
    },
    {
      icon: (
        <ReportProblemOutlinedIcon
          fontSize="small"
          style={{ color: 'white' }}
        />
      ),
      text: 'Report',
    },
  ];

  return (
    <article
      className="flex relative gap-x-3 mobile:justify-between !w-full"
    >
      <article className={avatar?.isHeaderAvatar ? 'w-full' : ''}>
        <h3 className="text-base text-white">William Spada</h3>
        <Typography
          component="p"
          variant="body2"
          className="text-sm text-[#919191]"
        >
          Last connected 8 minutes ago
        </Typography>
      </article>
      {!avatar?.isHeaderAvatar && (
        <>
          <ul className="flex items-center gap-x-3" data-testid="avatar-actions">
            <li className="[clip-path:circle()] w-5 h-5 bg-[#FF4A4A] flex items-center justify-center">
              <span className="text-center text-white text-xs">3</span>
            </li>
            <div
              onClick={avatar?.openMenu}
              onKeyDown={avatar?.openMenu}
              role="button"
              tabIndex={0}
              aria-label="Button to open avatar menu option"
            >
              <li className="cursor-pointer hover:opacity-50 hover:transition-all mobile:hidden">
                <MoreVertIcon style={{ color: 'white' }} />
              </li>
            </div>
          </ul>
          {avatar?.isMenuOpen && (
            <MenuList
              className="bg-[#413e3e] text-white !absolute !left-0 z-10"
              ref={avatar?.menuRef}
            >
              {avatarListOptions.map((option) => (
                <MenuItem key={option.text}>
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText>{option.text}</ListItemText>
                </MenuItem>
              ))}
            </MenuList>
          )}
        </>
      )}
    </article>
  );
}
