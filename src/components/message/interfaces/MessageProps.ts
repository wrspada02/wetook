export type MessageType =
  | 'common'
  | 'call'
  | 'audio'
  | 'file'
  | 'location'
  | 'photos';

export interface MessageProps {
  type: MessageType;
  value: string | string[];
  isIncomingMessage: boolean;
  hour: string;
}
