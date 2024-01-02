export interface MessageProps {
  type: 'common' | 'call' | 'audio' | 'file' | 'location' | 'photos';
  value: string | string[];
  isIncomingMessage: boolean;
}