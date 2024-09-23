import { useEffect, useState } from "react";
import apiClient from "../se"
interface Game {
    id: number;
    name: string;
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
      apiClient
        .get<FetchGamesResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((err) => setError(err.message));
    });
  
}
export default useGames;