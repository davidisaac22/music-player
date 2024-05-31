import React, {useState, useRef} from "react";
//  components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// scss 
import "./styles/App.scss";
// import music data
import data from "./Data";

function App() {
  // ref
  const audioRef = useRef(null);
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState ({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  // event handlers
  const playSongHandler = () => {
      if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(!isPlaying);
      } else {
          audioRef.current.play();
          setIsPlaying(!isPlaying);
      }
  }
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation,});
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} playSongHandler={playSongHandler}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
         />
      <Library songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        libraryStatus={libraryStatus}
        setSongs={setSongs} />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
 