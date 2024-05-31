import React from "react";

const LibrarySongs = ({song, songs, setCurrentSong, id, isPlaying ,audioRef, setSongs}) => {
    const selectSongHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id);
        await setCurrentSong(selectedSong[0]);
        const newSongs = songs.map((song) => {
            if(song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
        
       if (isPlaying) audioRef.current.play();
    };
    
    return (
        <div className={`library-container ${song.active? "selected" : ""}`} onClick={selectSongHandler}>
            <img src={song.cover} alt={song.title}/>
            <div className="library-info">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySongs;