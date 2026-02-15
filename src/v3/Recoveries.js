import { GizmoClient } from "../GizmoClient.js";

export class Recoveries {
  constructor(client) {
    this.client = client;
  }

  /**
   * Initiates password recovery by mobile phone.
   * @param {string} username - User name.
   * @param {Object} params - additional query params
   */
  postRecoveriesPasswordByUsernamePhone(username, params = {}) {
    const url = `/api/v3.0/recoveries/password/${username}/phone`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Initiates password recovery by email.
   * @param {string} username - User name.
   * @param {Object} params - additional query params
   */
  postRecoveriesPasswordByUsernameEmail(username, params = {}) {
    const url = `/api/v3.0/recoveries/password/${username}/email`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Completes password recovery.
   * @param {string} token - Token.
   * @param {string} confirmationCode - Confirmation code.
   * @param {Object} params - additional query params
   */
  postRecoveriesPasswordByTokenByConfirmationCodeComplete(
    token,
    confirmationCode,
    params = {},
  ) {
    const url = `/api/v3.0/recoveries/password/${token}/${confirmationCode}/complete`;
    return this.client.request("post", url, {}, params);
  }
}
