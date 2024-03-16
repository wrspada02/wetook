import MicNoneIcon from '@mui/icons-material/MicNone';
import CallIcon from '@mui/icons-material/Call';
import { CallModalDumbProps } from '../interfaces/CallModalDumbProps';

export function CallModalDumb(props: CallModalDumbProps) {
  return (
    <section className="absolute w-full h-screen left-0 top-0 flex flex-col items-center justify-center bg-[#00000050]">
      <article className="bg-[#3F3F3F] w-fit py-5 px-10 text-center rounded-lg">
        <figure>
          <img src={props.imagePath} className="w-[100px] mx-auto rounded-full" alt="Profile user avatar" />
          <figcaption>
            <p className="text-white">
              {props.isConnected ? 'Connected' : 'Calling...'}
            </p>
            <p className="text-[#919191] mt-10">{props.timer}</p>
          </figcaption>
        </figure>
        <footer className="pt-5">
          <ul className="flex items-center justify-center gap-x-5">
            <li className="flex-1 cursor-pointer">
              <MicNoneIcon className="text-white" />
            </li>
            <li className="bg-red p-2 rounded-full flex-1 cursor-pointer">
              <button type="button" onClick={props.closeModal} aria-label="Close Call Modal">
                <CallIcon className="text-white" />
              </button>
            </li>
          </ul>
        </footer>
      </article>
    </section>
  );
}
