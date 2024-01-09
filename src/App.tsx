import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { GameQuery } from "./hooks/useGame";
import GameHeading from "./components/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
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
        <NavBar
          setSearchValue={(value) =>
            setGameQuery({ ...gameQuery, search: value })
          }
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={gameQuery.genres}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genres: genre })
            }
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack marginY={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platforms}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platforms: platform })
              }
            ></PlatformSelector>
            <SortSelector
              selectedSortOrder={gameQuery.ordering}
              onSelectedSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, ordering: sortOrder })
              }
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
