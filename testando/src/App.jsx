import "./App.css";
import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Disco from "./components/Disco";

// All my links
import Instagram from "./assets/Instagram.svg";
import Spotify from "./assets/Spotify.svg";

// Music ON & OFF
import MusicOn from "./assets/musicon.svg";
import MusicOff from "./assets/musicoff.svg";

import Piano from "./assets/videos/Pianointhesky(Corte).webm";

const songs = [
  {
    id: 1,
    title: "PIANO IN THE SKY",
    artist: "Mikayla Geier",
    cover: "https://i.scdn.co/image/ab67616d0000b273035c334f4da50d5a94047fdd",
    video: Piano,
  },
  {
    id: 2,
    title: "MURDER ON THE DANCEFLOOR",
    artist: "Sophie Ellis-Bextor",
    cover:
      "https://upload.wikimedia.org/wikipedia/pt/6/6f/Capa_de_Murder_on_the_Dancefloor.png",
    video: "https://www.youtube.com/embed/xGaZBfJOyAc?si=KvimjU--AFqkq5Kv",
  },
  {
    id: 3,
    title: "MANCHILD",
    artist: "Sabrina Carpenter",
    cover: "https://i.scdn.co/image/ab67616d0000b273062c6573009fdebd43de443b",
    video:
      "https://www.youtube.com/embed/tQ0yjYUFKAE?autoplay=1&mute=1&loop=1&playlist=tQ0yjYUFKAE",
  },
  {
    id: 4,
    title: "MANCHILD",
    artist: "Sabrina Carpenter",
    cover: "https://i.scdn.co/image/ab67616d0000b273062c6573009fdebd43de443b",
    video:
      "https://www.youtube.com/embed/tQ0yjYUFKAE?autoplay=1&mute=1&loop=1&playlist=tQ0yjYUFKAE",
  },
  {
    id: 5,
    title: "MANCHILD",
    artist: "Sabrina Carpenter",
    cover: "https://i.scdn.co/image/ab67616d0000b273062c6573009fdebd43de443b",
    video:
      "https://www.youtube.com/embed/tQ0yjYUFKAE?autoplay=1&mute=1&loop=1&playlist=tQ0yjYUFKAE",
  },
  {
    id: 6,
    title: "MANCHILD",
    artist: "Sabrina Carpenter",
    cover: "https://i.scdn.co/image/ab67616d0000b273062c6573009fdebd43de443b",
    video:
      "https://www.youtube.com/embed/tQ0yjYUFKAE?autoplay=1&mute=1&loop=1&playlist=tQ0yjYUFKAE",
  },
];

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  // Ajusta o volume quando o vídeo for carregado
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.2;
    }
  }, [currentSong]); // roda toda vez que a música mudar

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        {currentSong && (
          <div className="video-container">
            {currentSong.video.endsWith(".webm") ? (
              <video
                key={currentSong.id}
                className="background-video"
                autoPlay
                loop
                ref={videoRef}
                muted={isMuted}
              >
                <source src={currentSong.video} type="video/webm" />
              </video>
            ) : (
              <iframe
                key={currentSong.id}
                className="background-video"
                src={currentSong.video}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}

            <div className="overlay-black">
              <div className="principal">
                <h1>Pop Lyrics</h1>
                <div className="links">
                  <a
                    href="https://www.instagram.com/poplyrics_brasil/"
                    target="_blank"
                  >
                    <img src={Instagram} alt="" width={28} />
                  </a>
                  <a
                    href="https://open.spotify.com/user/4gvin36hbuyictiwzrvnis9b1?si=cb80d3a5fe0242bb"
                    target="_blank"
                  >
                    <img src={Spotify} alt="" width={28} />
                  </a>
                </div>
              </div>

              <p>
                {currentSong.title} <br /> {currentSong.artist}
              </p>

              {currentSong.video.endsWith(".webm") && (
                <img
                  src={isMuted ? MusicOff : MusicOn}
                  onClick={toggleMute}
                  alt="Toggle mute"
                  className="mute-btn"
                  width={32}
                />
              )}
            </div>
          </div>
        )}
      </main>

      <Disco songs={songs} onSelectSong={setCurrentSong} />
    </>
  );
}

export default App;