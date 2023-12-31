import { Search } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import { Input, InputAdornment } from '@mui/material';
import { NestedList } from '../components/nested-list';
import { Avatar } from '../components/avatar';

export function Home() {
 return (
  <main className='bg-primary min-h-screen w-screen mobile:px-5'>
   <header className="mobile:flex mobile:items-center mobile:justify-between mobile:pt-10">
    <h1 className="text-white mobile:text-xl font-bold">Contact</h1>
    <button>
     <TuneIcon style={{ color: 'white' }} />
    </button>
   </header>
   <form action="get">
    <Input
     className='mobile:!text-white mobile:!placeholder-white mobile:w-full mobile:my-5 mobile:p-1 mobile:bg-[#3F3F3F] mobile:rounded-md'
     placeholder='Search username...'
     startAdornment={
      <InputAdornment position="start">
       <Search style={{ color: '#737373' }} />
      </InputAdornment>
     }
    />
   </form>
   <NestedList titleHeader='Contact' items={[<Avatar isGroup={false} />, <Avatar isGroup={false} />, <Avatar isGroup={false} />, <Avatar isGroup={false} />, <Avatar isGroup={false} />, <Avatar isGroup={false} />]} />
   <NestedList titleHeader='Group' items={[<Avatar isGroup />, <Avatar isGroup />, <Avatar isGroup />, <Avatar isGroup />, <Avatar isGroup />, <Avatar isGroup />]} />
  </main>
 );
}