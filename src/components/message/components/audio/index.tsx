import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { MessageAudioProps } from './interfaces/MessageAudioProps';

export function Audio(props: MessageAudioProps) {
  return (
    <div data-testid="message-audio" className="flex items-center justify-center gap-x-2 text-white px-2 py-2">
      <PlayCircleFilledWhiteIcon style={{ color: 'text-secondary' }} />
      <span>{props.timeDuration}</span>
    </div>
  );
}
