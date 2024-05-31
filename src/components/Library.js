import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({songs, setCurrentSong, isPlaying, audioRef, libraryStatus,setSongs}) => {

    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song => 
                    <LibrarySongs
                    song={song}
                    songs={songs}
                    setCurrentSong={setCurrentSong}
                    id={song.id}
                    key={song.id}
                    isPlaying={isPlaying}
                    audioRef={audioRef}
                    setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;