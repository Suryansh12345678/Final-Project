
import React from 'react';
import { AppState } from '../types';

interface SoundManagerProps {
  isMuted: boolean;
  state: AppState;
}

const SoundManager: React.FC<SoundManagerProps> = ({ isMuted, state }) => {
  // All audio logic removed as requested for silence and to remove the "shout" effect during transition.
  return null;
};

export default SoundManager;
