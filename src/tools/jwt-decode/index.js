import jwtDecode from "jwt-decode";

/**
 * Decodes the payload of a JWT token without validation.
 *
 * @param {string} token - The JWT token to decode.
 * @returns {object} - The decoded payload.
 * @throws {Error} - Throws if the token is malformed or invalid.
 */
export function decodeJWT(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    throw new Error(`Invalid JWT token: ${error.message}`);
  }
}

/**
 * Decodes the header of a JWT token without validation.
 *
 * @param {string} token - The JWT token to decode.
 * @returns {object} - The decoded header.
 * @throws {Error} - Throws if the token is malformed or invalid.
 */
export function decodeJWTHeader(token) {
  try {
    return jwtDecode(token, { header: true });
  } catch (error) {
    throw new Error(`Invalid JWT token header: ${error.message}`);
  }
}
