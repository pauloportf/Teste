import "./Disco.css";

const Disco = ({ songs, onSelectSong }) => {
  return (
    <div className="gallery">
      {songs.map((song) => (
        <div
          key={song.id}
          className="card"
          style={{ backgroundImage: `url(${song.cover})` }}
          onClick={() => onSelectSong(song)}
        >
          <div className="overlay" style={{ backgroundColor: "#00000086" }}>
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Disco;
