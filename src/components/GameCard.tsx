import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformIconLIst } from "./PlatformIconLIst";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconLIst
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
