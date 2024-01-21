import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}
const GenresList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading marginBottom={5} fontSize="2xl">
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              ></Image>
              <Button
                fontSize="large"
                fontWeight={selectedGenreId === genre.id ? "bold" : "nomal"}
                variant="link"
                marginLeft={1}
                whiteSpace="normal"
                textAlign="left"
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
