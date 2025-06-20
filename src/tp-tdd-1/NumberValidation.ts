export class NumberValidation {
  static validateNumber(input: string): number {
    const trimmed = input.trim();
    const num = Number(trimmed);

    if (trimmed === "" || isNaN(num)) {
      throw new Error("La valeur doit représenter un nombre");
    }

    return num;
  }
}