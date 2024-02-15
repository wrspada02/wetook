import { useContext } from 'react';
import { Group } from './Group';
import { Profile } from './Profile';
import { AvatarDumb } from '../AvatarDumb';
import { AvatarContext } from '../context/avatar';

export function Content() {
  const avatar = useContext(AvatarContext);

  return (
    <article className={`${avatar?.isColumnStyle && 'flex-col'} flex gap-x-2 w-full`}>
      {avatar?.isGroup ? (
        <Group />
      ) : (
        <Profile />
      )}
      <div className={`${avatar?.isColumnStyle && 'text-center pt-3 gap-y-5'} flex-1`}>
        <AvatarDumb />
      </div>
    </article>
  );
}
