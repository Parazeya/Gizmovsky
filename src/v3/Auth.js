import { GizmoClient } from "../GizmoClient.js";

export class Auth {
  constructor(client) {
    this.client = client;
  }

  /**
   * Requests user access token.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.username - Username.
   * @param {string} options.password - Password.
   * @param {Object} params - additional query params
   */
  getAuthApiUserV30AuthAccesstoken(options = {}, params = {}) {
    const url = `/api/user/v3.0/auth/accesstoken`;
    const username = options.hasOwnProperty("username")
      ? options["username"]
      : undefined;
    const password = options.hasOwnProperty("password")
      ? options["password"]
      : undefined;
    const query = Object.assign({}, params);
    if (username !== undefined) query["Username"] = username;
    if (password !== undefined) query["Password"] = password;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Refreshes user access token.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.token - Access token.
   * @param {string} options.refreshToken - Refresh token.
   * @param {Object} params - additional query params
   */
  getAuthApiUserV30AuthAccesstokenRefresh(options = {}, params = {}) {
    const url = `/api/user/v3.0/auth/accesstoken/refresh`;
    const token = options.hasOwnProperty("token")
      ? options["token"]
      : undefined;
    const refreshToken = options.hasOwnProperty("refreshToken")
      ? options["refreshToken"]
      : undefined;
    const query = Object.assign({}, params);
    if (token !== undefined) query["Token"] = token;
    if (refreshToken !== undefined) query["RefreshToken"] = refreshToken;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Requests operator access token.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.username - Username.
   * @param {string} options.password - Password.
   * @param {integer} options.branchId - Branch id.
   * @param {integer} options.registerId - Register id.
   * @param {Object} params - additional query params
   */
  getAuthAccesstoken(options = {}, params = {}) {
    const url = `/api/v3.0/auth/accesstoken`;
    const username = options.hasOwnProperty("username")
      ? options["username"]
      : undefined;
    const password = options.hasOwnProperty("password")
      ? options["password"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const query = Object.assign({}, params);
    if (username !== undefined) query["Username"] = username;
    if (password !== undefined) query["Password"] = password;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Refreshes operator access token.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.token - Token.
   * @param {string} options.refreshToken - Refresh token.
   * @param {integer} options.branchId - Branch id.
   * @param {integer} options.registerId - Register id.
   * @param {Object} params - additional query params
   */
  getAuthAccesstokenRefresh(options = {}, params = {}) {
    const url = `/api/v3.0/auth/accesstoken/refresh`;
    const token = options.hasOwnProperty("token")
      ? options["token"]
      : undefined;
    const refreshToken = options.hasOwnProperty("refreshToken")
      ? options["refreshToken"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const query = Object.assign({}, params);
    if (token !== undefined) query["Token"] = token;
    if (refreshToken !== undefined) query["RefreshToken"] = refreshToken;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    return this.client.request("get", url, {}, query);
  }
}
