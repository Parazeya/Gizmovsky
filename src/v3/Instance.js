import { GizmoClient } from "../GizmoClient.js";

export class Instance {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get authentication state.
   * @param {Object} params - additional query params
   */
  getInstanceAuthentication(options = {}, params = {}) {
    const url = `/api/v3.0/instance/authentication`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Authenticates instance.
   * @param {string} data.username - Authentication username.
   * @param {string} data.password - Authentication password.
   * @param {Object} params - additional query params
   */
  postInstanceAuthentication(data = {}, params = {}) {
    const url = `/api/v3.0/instance/authentication`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Authorizes instance.
   * @param {Object} params - additional query params
   */
  postInstanceAuthorization(params = {}) {
    const url = `/api/v3.0/instance/authorization`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Gets authorization state.
   * @param {Object} params - additional query params
   */
  getInstanceAuthorization(options = {}, params = {}) {
    const url = `/api/v3.0/instance/authorization`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets instance id.
   * @param {Object} params - additional query params
   */
  getInstanceId(options = {}, params = {}) {
    const url = `/api/v3.0/instance/id`;
    return this.client.request("get", url, {}, params);
  }
}
