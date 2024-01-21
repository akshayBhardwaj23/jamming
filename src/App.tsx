import { Grid, GridItem, Input, VStack } from "@chakra-ui/react";
import TrackList from "./components/TrackList";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import PlayList from "./components/PlayList";

//interface for Tracks details
interface Tracks {
  song: string;
  artist: string;
}

function App() {
  const [tracks, setTracks] = useState<Tracks[]>([]); //state hook for Fetched Tracks
  const [playList, setPlayList] = useState<Tracks[]>([]); //state hook for Playlist

  //Sample value added to Tracks
  useEffect(() => {
    setTracks([
      { song: "Song1", artist: "artist1" },
      { song: "Song2", artist: "artist2" },
      { song: "Song3", artist: "artist3" },
    ]);
  }, []);

  //Sample value added to Playlist
  useEffect(() => {
    setPlayList([
      { song: "Song4", artist: "artist4" },
      { song: "Song5", artist: "artist5" },
      { song: "Song6", artist: "artist6" },
    ]);
  }, []);

  return (
    <>
      <Grid
        templateAreas={`"nav nav"
       "search search"
       "side1 side2"`}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="search" bg="red">
          Search
        </GridItem>
        <GridItem area="side1">
          <VStack>
            {tracks?.map((track) => (
              <TrackList
                song={track.song}
                artist={track.artist}
                /**Adding to playlist on click of + icon: only unique songs will be added */
                addToPlaylist={() => {
                  if (
                    /**
                     * This condition compares the length of playlist array
                     * to the filtered playlist array checking if song is
                     * already present in the array
                     */
                    playList.length ===
                    playList.filter((pl) => pl.song !== track.song).length
                  ) {
                    setPlayList((playlist) => [
                      ...playlist,
                      { song: track.song, artist: track.artist },
                    ]);
                  }
                }}
              ></TrackList>
            ))}
          </VStack>
        </GridItem>
        <GridItem area="side2">
          <VStack>
            <Input></Input>
            {playList?.map((plist) => (
              <PlayList
                song={plist.song}
                artist={plist.artist}
                /**Removing song from playlist on click of
                 * delete button
                 */
                removeFromPlaylist={() =>
                  setPlayList(playList.filter((pl) => pl.song !== plist.song))
                }
              ></PlayList>
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
