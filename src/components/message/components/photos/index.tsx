import { MessagePhotoProps } from "./interfaces/MessagePhotoProps";

export function Photos(props: MessagePhotoProps) {
  return (
    <ul className="flex items-center gap-x-2">
      {props.photosUrl.map((photoUrl, index) => (
        <li key={index} style={{ background: `url(${photoUrl})`}} className={`object-cover w-16 h-16 bg-center rounded-md`}></li>
      ))}
    </ul>
  );
}