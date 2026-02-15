import { GizmoClient } from "../GizmoClient.js";

export class Tokens {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {string} token - path
   * @param {string} confirmationCode - path
   * @param {any} tokenType - path
   * @param {Object} params - additional query params
   */
  getTokensByTokenByConfirmationCodeByTokenTypeValid(
    token,
    confirmationCode,
    tokenType,
    options = {},
    params = {}
  ) {
    const url = `/api/v2.0/tokens/${token}/${confirmationCode}/${tokenType}/valid`;
    return this.client.request("get", url, {}, params);
  }
}
