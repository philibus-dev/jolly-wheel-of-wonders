import {Game} from "./game";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profileImgUrl: URL;
  hasSwap: boolean;
  numPoints: number;
  joinedGame: Game;
  numPresents: Game;
}
