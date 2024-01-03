import { Avatar } from "../avatar";
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Message } from "../message";
import { ChatPanelProps } from "./interfaces/ChatPanelProps";
import {v4 as uuid } from 'uuid';

export function ChatPanel(props: ChatPanelProps) {
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
        {props.messages.map((message) => (
          message.messageType === 'photos' ? (
            <ul className="flex items-center gap-x-2">
              <Message type="photos" value={message.messageContent} isIncomingMessage={message.isIncomingMessage} key={uuid()} />
            </ul>
          ) : (
              <Message type={message.messageType} value={message.messageContent} isIncomingMessage={message.isIncomingMessage} key={uuid()} />
            )
        ))}
      </section>
  </section>
 );
}