import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenresList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
              ></Image>
              <Button
                fontSize="large"
                variant="link"
                marginLeft={1}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
