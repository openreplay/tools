import { encodeBase64, decodeBase64 } from "../src/tools/base64/index.js";

describe("Base64 Encoding and Decoding", () => {
  test("should encode and decode correctly", () => {
    const text = "hello world";
    const encoded = encodeBase64(text);
    const decoded = decodeBase64(encoded);

    console.log("Original Text:", text);
    console.log("Encoded Text:", encoded);
    console.log("Decoded Text:", decoded);

    expect(encoded).toBe("aGVsbG8gd29ybGQ=");
    expect(decoded).toBe(text);
  });

  test("should handle empty strings", () => {
    const text = "";
    const encoded = encodeBase64(text);
    const decoded = decodeBase64(encoded);

    console.log("Empty String Test - Encoded:", encoded, "Decoded:", decoded);

    expect(encoded).toBe("");
    expect(decoded).toBe(text);
  });
});
