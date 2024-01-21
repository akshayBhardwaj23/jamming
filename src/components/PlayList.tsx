/**
 * Component for user PlayList
 */

import { DeleteIcon } from "@chakra-ui/icons";
import { Card, HStack, Heading, IconButton, Text } from "@chakra-ui/react";

interface Props {
  song: string;
  artist: string;
  removeFromPlaylist: () => void;
}

const PlayList = ({ song, artist, removeFromPlaylist }: Props) => {
  return (
    <Card>
      <HStack>
        <Heading>{song}</Heading>{" "}
        <IconButton
          aria-label="Save Song"
          icon={<DeleteIcon />}
          onClick={removeFromPlaylist}
        ></IconButton>
      </HStack>
      <Text>{artist}</Text>
    </Card>
  );
};

export default PlayList;
