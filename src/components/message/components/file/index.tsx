import { MessageFileProps } from "./interfaces/MessageFileProps";
import AttachmentIcon from '@mui/icons-material/Attachment';

export function File(props: MessageFileProps) {
  return (
    <a href="">
      <figure className="flex items-center gap-x-2 justify-center p-2">
        <AttachmentIcon style={{ color: 'white' }} />
        <figcaption>
          <span className="text-white text-base">{props.name}</span>
        </figcaption>
      </figure>
    </a>
  );
}