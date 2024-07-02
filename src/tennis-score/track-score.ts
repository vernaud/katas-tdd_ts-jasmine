import { TennisRules } from "./tennis-rules";

export class TrackPoints {
  private _wonPointsPlayer1: number = 0;
  private _wonPointsPlayer2: number = 0;

  private tennisRules: TennisRules;

  /**
   * Get the number of points won by a player
   * @param idPlayer : number - Id of the player (1 or 2)
   * @returns : number - Number of points won by the player
   * @throws : Error - If the player is not in [1,2]
   */
  public getWonPointsPlayer(idPlayer: number): number {
    switch (idPlayer) {
      case 1:
        return this.tennisRules.convertPointsToScore(this._wonPointsPlayer1);
      case 2:
        return this.tennisRules.convertPointsToScore(this._wonPointsPlayer2);
      default:
        throw new Error("Invalid player");
    }
  }

  /**
   * Increment the score of player1 or player2
   * @param player : number - Id of the player (1 or 2)
   */
  incrementPlayerPoints(player: number): void {
    switch (player) {
      case 1:
        if (this._wonPointsPlayer1 < 3) {
            this._wonPointsPlayer1++;
        }
        break;
      case 2:
        if (this._wonPointsPlayer2 < 3) {
            this._wonPointsPlayer2++;
        }
        break;
      default:
        throw new Error("Invalid player");
    }
  }
}
