import { Search } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import { Input, InputAdornment, Tooltip } from '@mui/material';
import { NestedList } from '../components/nested-list';
import { Avatar } from '../components/avatar';
import { ChatPanel } from '../components/chat-panel';

export function Home() {
 return (
  <main className='bg-primary h-screen mobile:px-5 desktop:flex fullscreen:flex overflow-hidden max-h-screen'>
   <aside className='desktop:px-3 desktop:min-w-[350px] fullscreen:px-5 fullscreen:min-w-[400px] mobile:border-none border-r-[0.5px] border-[#FCFCFC] overflow-y-auto scrollbar'>
    <header className="flex items-center justify-between pt-10">
     <h1 className="text-white text-xl font-bold">Contact</h1>
     <button>
      <Tooltip title="Configuration">
        <TuneIcon style={{ color: 'white' }} />
      </Tooltip>
     </button>
    </header>
    <form action="get">
     <Input
      className='!text-white !placeholder-white w-full my-5 p-1 bg-[#3F3F3F] rounded-md'
      placeholder='Search username...'
      startAdornment={
       <InputAdornment position="start">
        <Search style={{ color: '#737373' }} />
       </InputAdornment>
      }
     />
    </form>
    <NestedList titleHeader='Contact' isThereAddIconButton items={[<Avatar isGroup={false} isHeaderAvatar={false} />, <Avatar isGroup={false} isHeaderAvatar={false} />, <Avatar isGroup={false} isHeaderAvatar={false} />, <Avatar isGroup={false} isHeaderAvatar={false} />, <Avatar isGroup={false} isHeaderAvatar={false} />, <Avatar isGroup={false} isHeaderAvatar={false} />]} />
    <NestedList titleHeader='Group' isThereAddIconButton={false} items={[<Avatar isGroup isHeaderAvatar={false} />, <Avatar isGroup isHeaderAvatar={false} />, <Avatar isGroup isHeaderAvatar={false} />, <Avatar isGroup isHeaderAvatar={false} />, <Avatar isGroup isHeaderAvatar={false} />, <Avatar isGroup isHeaderAvatar={false} />]} />
   </aside>
   <section className='mobile:hidden tablet:hidden flex-1'>
    <ChatPanel chat={[{day: 'Today', messages: [{isIncomingMessage: true, messageContent: 'Hello World', messageType: 'common', hour: '09:32am'}, { isIncomingMessage: false, messageContent: ['https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg'], messageType: 'photos', hour: '09:40am'}]}, {day: 'Today', messages: [{isIncomingMessage: true, messageContent: 'Hello World', messageType: 'common', hour: '09:32am'}, { isIncomingMessage: false, messageContent: ['https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg'], messageType: 'photos', hour: '09:40am'}]}, {day: 'Today', messages: [{isIncomingMessage: true, messageContent: 'Hello World', messageType: 'common', hour: '09:32am'}, { isIncomingMessage: false, messageContent: ['https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg'], messageType: 'photos', hour: '09:40am'}]}, {day: 'Today', messages: [{isIncomingMessage: true, messageContent: 'Hello World', messageType: 'common', hour: '09:32am'}, { isIncomingMessage: false, messageContent: ['https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg'], messageType: 'photos', hour: '09:40am'}]}, {day: 'Today', messages: [{isIncomingMessage: true, messageContent: 'Hello World', messageType: 'common', hour: '09:32am'}, { isIncomingMessage: false, messageContent: ['https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg', 'https://media.cntraveler.com/photos/651d8e07fe6c3b63c3ec5459/master/w_1600%2Cc_limit/japan-GettyImages-1424557887.jpeg'], messageType: 'photos', hour: '09:40am'}]}]} />
   </section>
  </main>
 );
}