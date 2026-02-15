import { GizmoClient } from "../GizmoClient.js";

export class Recovery {
  constructor(client) {
    this.client = client;
  }

  /**
   * Initiates password recovery by mobile phone.
   * @param {string} username - User name.
   * @param {Object} params - additional query params
   */
  postRecoveryPasswordByUsernamePhone(username, params = {}) {
    const url = `/api/v2.0/recovery/password/${username}/phone`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Initiates password recovery by email.
   * @param {string} username - User name.
   * @param {Object} params - additional query params
   */
  postRecoveryPasswordByUsernameEmail(username, params = {}) {
    const url = `/api/v2.0/recovery/password/${username}/email`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Completes password recovery.
   * @param {string} token - Token.
   * @param {string} confirmationCode - Confirmation code.
   * @param {Object} params - additional query params
   */
  postRecoveryPasswordByTokenByConfirmationCodeComplete(
    token,
    confirmationCode,
    params = {}
  ) {
    const url = `/api/v2.0/recovery/password/${token}/${confirmationCode}/complete`;
    return this.client.request("post", url, {}, params);
  }
}
