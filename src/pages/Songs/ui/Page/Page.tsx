const AllSongs = [
  {
    id: 1,
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
    duration: "Duration",
  },
  {
    id: 2,
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
    duration: "Duration",
  },
];

const Songs = () => {
  return (
    <div>
      <h1>{AllSongs.map((s) => s.title)}</h1>
    </div>
  );
};

export default Songs;
