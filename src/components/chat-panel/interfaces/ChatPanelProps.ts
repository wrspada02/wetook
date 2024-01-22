import { ChatProps } from "./ChatProps";

export interface ChatPanelProps {
  chat: ChatProps[];
  onClickAboutContact(): void;
}