import { Audio } from "./components/audio";
import { Call } from "./components/call";
import { MessageProps } from "./interfaces/MessageProps";

export function Message({ type, value }: MessageProps) {
  const message = {
    audio: <Audio timeDuration={value as string} />,
    call: <Call timeDuration={value as string} type="incoming" />,
    common: '',
    file: '',
    location: '',
    photos: '',
  };

  return (
  <article className="bg-[#4C4C4C] rounded-lg w-fit mt-3">
    {message[type]}
  </article>
  );
}