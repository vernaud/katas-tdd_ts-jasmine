export class TennisScore {
  wonPointsPlayer1: number = 0;
  wonPointsPlayer2: number = 0;

  static getScore() {
    return this;
  }

  /**
   * Convert the number of exchanges won to the tennis score
   * @param nb : number - Number of exchanges won
   * @returns : number - Score in tennis
   * @throws : Error - If the number of points is not in [0,1,2,3]
   */
  static convertPointsToScore(nb: number): number {
    switch (nb) {
      case 0:
        return 0;
      case 1:
        return 15;
      case 2:
        return 30;
      case 3:
        return 40;
      default:
        throw new Error("Invalid number of points");
    }
  }

  winPoint(player: number) {
    switch (player) {
        case 1:
            this.wonPointsPlayer1++;
            break;
        case 2:
            this.wonPointsPlayer2++;
            break;
        default:
            break;
    }
  }
}
