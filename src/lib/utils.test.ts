import { sanitizeXLink, sanitizeXName } from "./utils";

describe("sanitizeXName", () => {
  test("should handle basic handle formats", () => {
    expect(sanitizeXName("trezoa")).toBe("trezoa");
    expect(sanitizeXName("@trezoa")).toBe("trezoa");
    expect(sanitizeXName("  trezoa  ")).toBe("trezoa");
  });
});

describe("sanitizeXLink", () => {
  test("should handle basic handle formats", () => {
    expect(sanitizeXLink("trezoa")).toBe("https://x.com/trezoa");
    expect(sanitizeXLink("@trezoa")).toBe("https://x.com/trezoa");
    expect(sanitizeXLink("  trezoa  ")).toBe("https://x.com/trezoa");
  });
});
