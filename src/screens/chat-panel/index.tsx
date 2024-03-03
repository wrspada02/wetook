import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { v4 as uuid } from 'uuid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Input, InputAdornment, Tooltip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ChatPanelProps } from './interfaces/ChatPanelProps';
import { Message } from '../../components/message';
import { Avatar } from '../../components/avatar';
import { MessageType } from '../../components/message/interfaces/MessageProps';

export function ChatPanel(props: ChatPanelProps) {
  const headerListOptions = [
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
    {
      icon: <MoreVertIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'More Options',
      action: props.onClickAboutContact,
    },
  ];

  const footerListOptions = [
    {
      icon: <ThumbUpIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Send a like',
    },
    {
      icon: <CameraAltIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Send a instant photo',
    },
    {
      icon: <CollectionsIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Send a photo from the gallery',
    },
    {
      icon: <KeyboardVoiceIcon fontSize="small" style={{ color: 'white' }} />,
      text: 'Send a voice message',
    },
  ];

  return (
    <section className="relative bg-primary h-screen">
      <header className="flex items-center justify-between gap-x-3 px-3 py-5 border-b-[0.5px] border-[#FCFCFC]">
        <Avatar isGroup={false} isHeaderAvatar key={uuid()} />
        <nav>
          <ul className="flex items-center gap-x-4">
            {headerListOptions.map((option) => (
              <div
                key={uuid()}
                className="hover:cursor-pointer"
                onClick={option?.action}
                tabIndex={0}
                onKeyDown={option.action}
                role="button"
              >
                <li>
                  <Tooltip title={option.text}>{option.icon}</Tooltip>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </header>
      <section className="px-5 max-h-[80vh] overflow-y-auto scrollbar">
        <article>
          {props.chat.map((content) => (
            <div className="flex flex-col" key={uuid()}>
              <h2 className="text-white self-center pt-5">{content.day}</h2>
              {content.messages.map((message) => (
                <Message
                  type={message.messageType as MessageType}
                  value={message.messageContent}
                  isIncomingMessage={message.isIncomingMessage}
                  hour={message.hour}
                  key={uuid()}
                />
              ))}
            </div>
          ))}
        </article>
      </section>
      <footer className="flex items-center px-5 gap-x-5 absolute bottom-2 w-full">
        <Input
          startAdornment={(
            <InputAdornment position="start">
              <Tooltip title="Attach File">
                <AttachFileIcon
                  style={{ color: 'white' }}
                  className="hover:cursor-pointer"
                />
              </Tooltip>
            </InputAdornment>
          )}
          endAdornment={(
            <InputAdornment position="end">
              <Tooltip title="Send Message">
                <SendIcon
                  style={{ color: 'white' }}
                  className="hover:cursor-pointer"
                />
              </Tooltip>
            </InputAdornment>
          )}
          className="!text-white w-[90%] !bg-[#3F3F3F] p-1 !rounded-md"
          placeholder="Write a Message"
        />
        <ul className="flex items-center gap-x-2">
          {footerListOptions.map((option) => (
            <li key={uuid()} className="hover:cursor-pointer">
              <Tooltip title={option.text}>{option.icon}</Tooltip>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
}
