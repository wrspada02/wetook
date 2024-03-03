import { Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { MessageLocationProps } from './interfaces/MessageLocationProps';

export function Location(props: MessageLocationProps) {
  return (
    <figure data-testid="message-location" className="flex items-center justify-center gap-x-2 p-2">
      <PlaceIcon style={{ color: 'white' }} />
      <figcaption>
        <Typography
          component="p"
          variant="body2"
          className="text-white text-base"
        >
          {props.locationName.substring(0, 30).concat('...')}
        </Typography>
        <a href="google.com" className="text-xs text-[#919191]">
          Click to view on detail
        </a>
      </figcaption>
    </figure>
  );
}
