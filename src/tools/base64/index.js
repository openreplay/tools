import base64 from "base-64";

/**
 * Encodes a string to Base64 format.
 *
 * @param {string} input - The input string to encode.
 * @returns {string} - The Base64 encoded string.
 */
export function encodeBase64(input) {
  return base64.encode(input);
}

/**
 * Decodes a Base64 encoded string.
 *
 * @param {string} input - The Base64 encoded string to decode.
 * @returns {string} - The decoded string.
 */
export function decodeBase64(input) {
  return base64.decode(input);
}
