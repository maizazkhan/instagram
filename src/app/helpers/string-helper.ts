export class StringHelper {
  public static isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }
}
