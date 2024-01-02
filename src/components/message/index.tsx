import { Audio } from "./components/audio";
import { Call } from "./components/call";
import { Common } from "./components/common";
import { File } from "./components/file";
import { MessageProps } from "./interfaces/MessageProps";

export function Message({ type, value, isIncomingMessage }: MessageProps) {
  const message = {
    audio: <Audio timeDuration={value as string} />,
    call: <Call timeDuration={value as string} type="incoming" />,
    common: <Common content={value as string} hour="09:32am" />,
    file: <File name={value as string} />,
    location: '',
    photos: '',
  };

  return (
  <article className={`${isIncomingMessage ? 'bg-[#2C80FF]' : 'bg-[#4C4C4C]'} rounded-lg w-fit mt-3`}>
    {message[type]}
  </article>
  );
}