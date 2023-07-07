export type Song = {
  // img: string;
  // alt: string;
  id: number
  selectedId: number;
  name: string;
  artist: string;
  duration: number;
  callback: (id: number) => void;
};
