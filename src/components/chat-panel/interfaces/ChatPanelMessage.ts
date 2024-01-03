export interface ChatPanelMessage {
  messageType: 'common' | 'call' | 'audio' | 'file' | 'location' | 'photos';
  messageContent: string | string[];
  isIncomingMessage: boolean;
}