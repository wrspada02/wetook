import { Avatar } from "../avatar";
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Message } from "../message";


export function ChatPanel() {
 const audios = ['Hahahah!! Its crazy thank you so much'];
 return (
  <section>
      <header className="flex items-center justify-between px-3 py-5 bg-primary border-b-[0.5px] border-[#FCFCFC]">
      <Avatar isGroup={false} isHeaderAvatar={true} key={'chat-panel-avatar'} />
      <nav>
        <ul className="flex items-center gap-x-4">
        <li>
          <a href="">
          <VideocamIcon style={{ color: 'white' }} />
          </a>
        </li>
        <li>
          <a href="">
          <CallIcon style={{ color: 'white' }} />
          </a>
        </li>
        <li>
          <a href="">
          <SearchIcon style={{ color: 'white' }} />
          </a>
        </li>
        <li>
          <a href="">
          <MoreVertIcon style={{ color: 'white' }} />
          </a>
        </li>
        </ul>
      </nav>
      </header>
      <section className="px-5">
        {audios.map((audio, index) => (
          <Message type="common" value={audio} isIncomingMessage key={index} />
        ))}
      </section>
  </section>
 );
}