import { NumberValidation } from "@/tp-tdd-1/NumberValidation";

describe("NumberValidation", () => {
  test("devrait valider un entier sous forme de chaîne", () => {
    expect(NumberValidation.validateNumber("42")).toBe(42);
  });
})