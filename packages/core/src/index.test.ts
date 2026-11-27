import { it, expect } from "vitest";
import { COLS } from "./index.js";

it("has 7 columns", () => {
  expect(COLS).toBe(7);
});
