import React from "react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, isError, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (isError) throw error;

  const first = data?.results[0];

  return first ? <video src={first.data[480]} poster={first.preview} /> : null;
};

export default GameTrailer;
