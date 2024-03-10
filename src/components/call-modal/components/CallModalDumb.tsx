import MicNoneIcon from '@mui/icons-material/MicNone';
import CallIcon from '@mui/icons-material/Call';
import { CallModalDumbProps } from '../interfaces/CallModalDumbProps';

export function CallModalDumb(props: CallModalDumbProps) {
  return (
    <section className="absolute w-full h-screen left-0 top-0 flex flex-col items-center justify-center bg-white">
      <article className="bg-[#3F3F3F] w-fit py-5 px-10 text-center rounded-lg">
        <figure>
          <img src={props.imagePath} className="w-[100px] rounded-full" alt="Profile user avatar" />
          <figcaption>
            <p className="text-white">
              {props.isConnected ? 'Connected' : 'Calling...'}
            </p>
            <p className="text-[#919191] mt-10">{props.timer}</p>
          </figcaption>
        </figure>
        <footer>
          <ul className="flex items-center justify-center gap-x-5">
            <li>
              <MicNoneIcon className="text-white" />
            </li>
            <li className="bg-red p-10 rounded-full">
              <CallIcon className="text-white" />
            </li>
          </ul>
        </footer>
      </article>
    </section>
  );
}
