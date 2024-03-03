import { Typography } from '@mui/material';
import { MessageCommonProps } from './interfaces/MessageCommonProps';

export function Common(props: MessageCommonProps) {
  return (
    <article data-testid="message-common" className="text-white p-2 flex items-end gap-x-2">
      <Typography component="p" variant="body2" className="text-base">
        {props.content}
      </Typography>
    </article>
  );
}
