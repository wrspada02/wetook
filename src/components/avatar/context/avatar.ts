import { createContext } from 'react';
import { AvatarProps } from '../interfaces/AvatarProps';
import { AvatarDumbProps } from '../interfaces/AvatarDumbProps';

export const AvatarContext = createContext<AvatarProps & AvatarDumbProps | null>(null);
