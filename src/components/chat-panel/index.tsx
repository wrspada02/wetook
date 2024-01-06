import { Avatar } from "../avatar";
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Message } from "../message";
import { ChatPanelProps } from "./interfaces/ChatPanelProps";
import {v4 as uuid } from 'uuid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Input, InputAdornment, Tooltip } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export function ChatPanel(props: ChatPanelProps) {
 return (
  <section className="relative h-full">
      <header className="flex items-center justify-between px-3 py-5 bg-primary border-b-[0.5px] border-[#FCFCFC]">
      <Avatar isGroup={false} isHeaderAvatar={true} key={'chat-panel-avatar'} />
      <nav>
        <ul className="flex items-center gap-x-4">
        <li>
          <a href="">
            <Tooltip title="Video Call" >
              <VideocamIcon style={{ color: 'white' }} />
            </Tooltip>
          </a>
        </li>
        <li>
          <a href="">
            <Tooltip title="Voice Call" >
              <CallIcon style={{ color: 'white' }} />
            </Tooltip>
          </a>
        </li>
        <li>
          <a href="">
            <Tooltip title="Search">
              <SearchIcon style={{ color: 'white' }} />
            </Tooltip>
          </a>
        </li>
        <li>
          <a href="">
            <Tooltip title="More Options">
              <MoreVertIcon style={{ color: 'white' }} />
            </Tooltip>
          </a>
        </li>
        </ul>
      </nav>
      </header>
      <section className="px-5 max-h-[80vh] overflow-y-auto scrollbar">
        <ul>
          {props.chat.map((content) => (
            <article className="flex flex-col" key={uuid()}>
              <h2 className="text-white self-center pt-5">{content.day}</h2>
              {content.messages.map((message) => (
                message.messageType === 'photos' ? (
                    <Message type="photos" value={message.messageContent} isIncomingMessage={message.isIncomingMessage} hour={message.hour} key={uuid()} />
                ) : (
                    <Message type={message.messageType} value={message.messageContent} isIncomingMessage={message.isIncomingMessage} hour={message.hour} key={uuid()} />
                  )
              ))}
            </article>
          ))}
        </ul>
      </section>
      <footer className='flex items-center px-5 gap-x-5 absolute bottom-2 w-full'>
      <Input
          startAdornment={
            <InputAdornment position="start">
              <Tooltip title="Attach File" >
                <AttachFileIcon style={{ color: 'white' }} className="hover:cursor-pointer" />
              </Tooltip>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <Tooltip title="Send Message" >
                <SendIcon style={{ color: 'white' }} className="hover:cursor-pointer" />
              </Tooltip>
            </InputAdornment>
          }
          className="!text-white w-[90%] !bg-[#3F3F3F] p-1 !rounded-md"
          placeholder="Write a Message"
        />
        <ul className="flex items-center gap-x-2">
          <li>
            <Tooltip title="Send a like" >
              <ThumbUpIcon style={{ color: 'white' }} className="hover:cursor-pointer" />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Send a instant photo">
              <CameraAltIcon style={{ color: 'white' }} className="hover:cursor-pointer" />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Send a photo from the gallery">
              <CollectionsIcon style={{ color: 'white' }} className="hover:cursor-pointer" />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Send a voice message">
              <KeyboardVoiceIcon style={{ color: 'white' }} className="hover:cursor-pointer" />
            </Tooltip>
          </li>
        </ul>
      </footer>
  </section>
 );
}