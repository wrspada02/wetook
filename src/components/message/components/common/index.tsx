import { MessageCommonProps } from "./interfaces/MessageCommonProps";

export function Common(props: MessageCommonProps) {
  return <article className={`text-white p-2 flex items-end gap-x-2`}>
    <p className="text-base">{props.content}</p>
    <span className="text-[#919191] text-xs">{props.hour}</span>
  </article>
}