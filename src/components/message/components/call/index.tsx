import { Typography } from "@mui/material";
import { MessageCallProps } from "./interfaces/MessageCallProps";
import CallIcon from '@mui/icons-material/Call';

export function Call(props: MessageCallProps) {
  return (
    <figure className="flex justify-center gap-x-2 text-white px-2 py-2">
      <CallIcon style={{ color: `${props.type === 'incoming' ? '#FF4A4A' : 'green'}`}} />
      <figcaption>
      <Typography component={'p'} variant='body2' className="text-white text-base">
        Call End
      </Typography>
      <Typography component={'p'} variant='body2' className="text-sm text-[#919191]">
        {props.timeDuration}
      </Typography>
      </figcaption>
    </figure>
  );
}