import { decodeJWT, decodeJWTHeader } from "../src/tools/jwt-decode/index.js";

describe("JWT Decode", () => {
  const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  test("should decode a valid JWT payload", () => {
    console.log("Testing payload decoding for a valid JWT...");

    const decoded = decodeJWT(validToken);
    console.log("Decoded Payload:", decoded);

    expect(decoded).toEqual({
      sub: "1234567890",
      name: "John Doe",
      iat: 1516239022,
    });

    console.log("Test passed: Valid JWT payload decoded successfully.");
  });

  test("should decode a valid JWT header", () => {
    console.log("Testing header decoding for a valid JWT...");

    const decodedHeader = decodeJWTHeader(validToken);
    console.log("Decoded Header:", decodedHeader);

    expect(decodedHeader).toEqual({
      alg: "HS256",
      typ: "JWT",
    });

    console.log("Test passed: Valid JWT header decoded successfully.");
  });

  test("should throw an error for an invalid JWT", () => {
    const invalidToken = "invalid.token";
    console.log("Testing with an invalid JWT...");

    try {
      decodeJWT(invalidToken);
    } catch (error) {
      console.log("Caught Error:", error.message);
      expect(error.message).toContain("Invalid JWT token:");
    }

    console.log("Test passed: Error thrown for invalid JWT.");
  });
});
