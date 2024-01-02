import { MessageLocationProps } from "./interfaces/MessageLocationProps";
import PlaceIcon from '@mui/icons-material/Place';

export function Location(props: MessageLocationProps) {
  return (
    <figure className="flex items-center justify-center gap-x-2 p-2">
      <PlaceIcon style={{ color: 'white' }} />
      <figcaption>
        <p className="text-white text-base">{props.locationName.substring(0, 30).concat('...')}</p>
        <a href="" className="text-xs text-[#919191]">Click to view on detail</a>
      </figcaption>
    </figure>
  );
}