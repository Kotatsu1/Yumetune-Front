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
};
