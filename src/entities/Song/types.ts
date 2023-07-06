export type Song = {
  // img: string;
  // alt: string;
  name: string;
  artist: string;
  duration: number;
  callback: (artist: string, title: string) => void;
};
