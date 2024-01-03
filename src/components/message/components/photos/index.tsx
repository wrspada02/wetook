import { MessagePhotoProps } from "./interfaces/MessagePhotoProps";

export function Photos(props: MessagePhotoProps) {
  return (
      props.photosUrl.map((photoUrl, index) => (
        <li key={index} className={`object-cover bg-[url('${photoUrl})'] w-16 h-16`}></li>
      ))
  );
}