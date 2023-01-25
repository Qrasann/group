import { getPercents } from "./percent";

describe("Correct test of function", () => {
  it("Correct percentage of the number", () => {
    expect(getPercents(50, 100)).toBe(50);
  }),
    it("Function returns NaN", () => {
      expect(getPercents("LOH", 100)).toBe(NaN);
    }),
    it("Negative percentage error", () => {
      expect(getPercents(-16, 100)).toBe(
        "Ошибка!! Ответ отрицательный"
      );
    });
});