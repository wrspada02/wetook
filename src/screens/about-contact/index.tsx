import {v4 as uuid } from 'uuid';
import { Avatar } from '../../components/avatar';
import InfoIcon from '@mui/icons-material/Info';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GroupIcon from '@mui/icons-material/Group';
import WarningIcon from '@mui/icons-material/Warning';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip, Typography } from '@mui/material';

export function AboutContact() {

  const aboutContactCommonListOptions = [
    {
      icon: <VideocamIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Video Call',
    },
    {
      icon: <CallIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Voice Call',
    },
    {
      icon: <SearchIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Search',
    },
  ];

  const aboutContactListOptions = [
    {
      icon: <InfoIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'About',
    },
    {
      icon: <AttachFileIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'File and Media',
    },
    {
      icon: <GroupIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Privacy and Settings',
    },
    {
      icon: <WarningIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Report',
    },
  ];
  return (
    <section className='py-20 px-5'>
      <Avatar isColumnStyle isGroup={false} isHeaderAvatar={true} key={uuid()} />
      <ul className='flex gap-x-3 mt-5'>
        {aboutContactCommonListOptions.map(option => (
          <li className='p-4 bg-secondary rounded-lg hover:cursor-pointer'>
            <Tooltip title={option.text}>
              {option.icon}
            </Tooltip>
          </li>
        ))}
      </ul>
      <section className='mt-5'>
        <h2 className='text-[#919191] font-semibold uppercase text-xs'>About user</h2>
        <nav>
          <ul>
            {aboutContactListOptions.map(option => (
              <li className='flex items-center gap-x-3 mt-3 relative hover:cursor-pointer'>
                  {option.icon}
                  <Typography component={'p'} variant='body2' className="text-white text-base font-medium">
                    {option.text}
                  </Typography>
                  <ChevronRightIcon className='text-[#737373] absolute left-[95%]' />
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </section>
  );
}