import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector, { SortOrder } from "./components/SortSelector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSortOrder, setSelectedSortOrder] = useState<SortOrder | null>(
    null
  );
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            ></GenresList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack paddingX={3} marginBottom={3}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
            ></PlatformSelector>
            <SortSelector
              selectedSortOrder={selectedSortOrder}
              onSelectedSortOrder={(sortOrder) =>
                setSelectedSortOrder(sortOrder)
              }
            ></SortSelector>
          </HStack>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            selectedSortOrder={selectedSortOrder}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
