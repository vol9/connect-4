import { it, expect } from "vitest";
import { COLS } from "./index.js";

it("checks COLS length", () => {
  expect(COLS).toBe(7);
});
