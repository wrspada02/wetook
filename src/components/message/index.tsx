import { Audio } from "./components/audio";
import { Call } from "./components/call";
import { Common } from "./components/common";
import { File } from "./components/file";
import { Location } from "./components/location";
import { Photos } from "./components/photos";
import { MessageProps } from "./interfaces/MessageProps";

export function Message({ type, value, isIncomingMessage, hour }: MessageProps) {
  const message = {
    audio: <Audio timeDuration={value as string} />,
    call: <Call timeDuration={value as string} type="incoming" />,
    common: <Common content={value as string} />,
    file: <File name={value as string} />,
    location: <Location locationName={value as string} />,
    photos: <Photos photosUrl={value as string[]} />,
  };

  return (
    <li className={`flex items-end gap-x-2 ${isIncomingMessage ? 'self-start' : 'self-end'}`}>
      <article className={`${isIncomingMessage ? 'bg-[#2C80FF]' : 'bg-[#4C4C4C] float-right'} rounded-lg w-fit mt-3`}>
        {message[type]}
      </article>
      <span className="text-[#919191] text-xs">{hour}</span>
    </li>
  );
}