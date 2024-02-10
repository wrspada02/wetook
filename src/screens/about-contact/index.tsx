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

export function AboutContact() {
  return (
    <section className='py-20 px-5'>
      <Avatar isColumnStyle isGroup={false} isHeaderAvatar={true} key={uuid()} />
      <ul className='flex gap-x-3 mt-5'>
        <li className='p-4 bg-secondary rounded-lg hover:cursor-pointer'>
          <InfoIcon style={{ color: 'white' }} />
        </li>
        <li className='p-4 bg-secondary rounded-lg hover:cursor-pointer'>
          <VideocamIcon style={{ color: 'white' }} />
        </li>
        <li className='p-4 bg-secondary rounded-lg hover:cursor-pointer'>
          <CallIcon style={{ color: 'white' }} />
        </li>
        <li className='p-4 bg-secondary rounded-lg hover:cursor-pointer'>
          <SearchIcon style={{ color: 'white' }} />
        </li>
      </ul>
      <section className='mt-5'>
        <h2 className='text-[#919191] font-semibold uppercase text-xs'>About user</h2>
        <nav>
          <ul>
            <li className='flex items-center gap-x-3 mt-3 relative hover:cursor-pointer'>
              <InfoIcon style={{ color: 'white', fontSize: 16 }} />
              <p className='text-white text-base font-medium'>About</p>
              <ChevronRightIcon className='text-[#737373] absolute left-[95%]' />
            </li>
            <li className='flex items-center gap-x-3 mt-3 relative hover:cursor-pointer'>
              <AttachFileIcon style={{ color: 'white', fontSize: 16 }} />
              <p className='text-white text-base font-medium'>File and Media</p>
              <ChevronRightIcon className='text-[#737373] absolute left-[95%]' />
            </li>
            <li className='flex items-center gap-x-3 mt-3 relative hover:cursor-pointer'>
              <GroupIcon style={{ color: 'white', fontSize: 16 }} />
              <p className='text-white text-base font-medium'>Privacy and Settings</p>
              <ChevronRightIcon className='text-[#737373] absolute left-[95%]' />
            </li>
            <li className='flex items-center gap-x-3 mt-3 relative hover:cursor-pointer'>
              <WarningIcon style={{ color: 'white', fontSize: 16 }} />
              <p className='text-white text-base font-medium'>Report</p>
              <ChevronRightIcon className='text-[#737373] absolute left-[95%]' />
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
}