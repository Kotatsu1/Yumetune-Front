export type LibrarySong = {
    library_id: number
    added_at: Date
    play_count: number
    selectedId: number;
    isPlaying: boolean;
    name: string;
    artist: string;
    duration: number;
    callback: (id: number) => void;
  };
  