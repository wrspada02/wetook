import { useEffect, useMemo, useState } from 'react';
import { CallModalDumb } from './components/CallModalDumb';
import { CallModalProps } from './interfaces/CallModalProps';

export function CallModal(props: CallModalProps) {
  const [isConnected] = useState<boolean>(false);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);

  const transformSecondsToTimer = (totalSec: number) => {
    const minutes = Math.floor(totalSec / 60);
    const seconds = totalSec % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const connectedTimer = useMemo(() => transformSecondsToTimer(totalSeconds), [totalSeconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CallModalDumb
      imagePath={props.imagePath}
      closeModal={props.closeCallModal}
      isConnected={isConnected}
      timer={connectedTimer}
    />
  );
}
