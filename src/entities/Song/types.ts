export type Song = {
  // img: string;
  // alt: string;
  id: number
  selectedId: number;
  isPlaying: boolean;
  name: string;
  artist: string;
  duration: number;
  callback: (id: number) => void;
  callback2: (id: number) => void;
  callback3: (id: number) => void;
};
