import { Opreation } from "./opreation";
import { Player } from "./player";

export enum ActionType {
  'attack', 'rest', 'skill', 'item'
}

export class Action {
  constructor(opt: Opreation) {
  }

  active(player: Player, match: Player) {

  }
}
