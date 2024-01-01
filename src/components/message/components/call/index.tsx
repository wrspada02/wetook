import { MessageCallProps } from "./interfaces/MessageCallProps";
import CallIcon from '@mui/icons-material/Call';

export function Call(props: MessageCallProps) {
  return (
    <figure className="flex justify-center gap-x-2 text-white px-2 py-2">
      <CallIcon style={{ color: `${props.type === 'incoming' ? 'red' : 'green'}`}} />
      <figcaption>
        <p className="text-white text-base">Call End</p>
        <p className="text-sm text-[#919191]">{props.timeDuration}</p>
      </figcaption>
    </figure>
  );
}