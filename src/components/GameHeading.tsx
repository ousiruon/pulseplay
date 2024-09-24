import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQUery: GameQuery;
}
const GameHeading = ({gameQUery}: Props) => {
  const heading = `${gameQUery.platform?.name || ''} ${gameQUery.genre?.name || ''} Games`
  return (
    <Heading as="h1" paddingX={10} paddingBottom={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
