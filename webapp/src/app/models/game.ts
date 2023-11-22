import {User} from "./user";

export interface Game {
  name: string;
  owner: User;
  // Will also contain owner in this array
  currPlayers: User[];
  // Will be the index of the user in currPlayers array
  currTurn: number;
  joinCode: string;
  numPresents: number;
  numCandySmall: number;
  numCandyMed: number;
  numCandyLarge: number;
}
