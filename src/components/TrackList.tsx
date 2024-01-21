/**
 * Component for searched tracks
 */
import { AddIcon } from "@chakra-ui/icons";
import { Card, HStack, Heading, IconButton, Text } from "@chakra-ui/react";

interface Props {
  song: string;
  artist: string;
  addToPlaylist: () => void;
}

const TrackList = ({ song, artist, addToPlaylist }: Props) => {
  return (
    <Card>
      <HStack>
        <Heading>{song}</Heading>{" "}
        <IconButton
          aria-label="Save Song"
          icon={<AddIcon />}
          onClick={addToPlaylist}
        ></IconButton>
      </HStack>
      <Text>{artist}</Text>
    </Card>
  );
};

export default TrackList;
